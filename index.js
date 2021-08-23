const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const teamArr = [];

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Please enter the name of the Manager.`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the Manager's ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the Manager's email?`,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the Manager's office number?`,
        },
        
    ])
    .then(mangAnswers => {
        const {name, id, email, officeNumber} = mangAnswers;
        const newManager = new Manager(name, id, email, officeNumber);
        teamArr.push(newManager);
    });
}

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please select the role of the employee you are adding:',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: `Please enter the name of the employee.`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the employee's ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the employee's email?`,
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the employee's github username?`,
            when: (answer) => answer.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: `What school does this the employee's attend?`,
            when: (answer) => answer.role === 'Intern'
        },
        {
            type: 'list',
            name: 'finish',
            message: 'Please select from the following options:',
            choices: ['Add another employee', 'Generate file']
        }
    ])
        .then(empAnswers => {
            let {role, name, id, email, github, school, finish} = empAnswers;
            let newMember;

            if(role === "Engineer") {
                newMember = new Engineer (name, id, email, github)
            } else {
                newMember = new Intern (name, id, email, school)
            }
        

        teamArr.push(newMember);

        if (finish === "Add another employee") {
            return employeeQuestions(teamArr);
        } else {
            return teamArr;
        }
    });
}

function writeToFile(data) {
    fs.writeFile("./dist/index.html", data, (err) => {
        err ? console.log(err): console.log("Successfully generated HTML")
    });
}

function init() {
    managerQuestions()
    .then(employeeQuestions)
    .then(teamArr => {
        return generateHTML(teamArr);
    })
    .then(cardHTML => {
        return writeToFile(cardHTML);
    })
};

init();


