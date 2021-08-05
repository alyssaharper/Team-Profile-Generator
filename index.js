const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

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
    .then((data) => {
        const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        console.log(data);
    });
}

const employeeQustions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeTitle',
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
            name: 'email',
            message: `What is the employee's github username?`,
            when: (ans) => ans.role === "Engineer",
        },
        {
            type: 'input',
            name: 'email',
            message: `What school does this the employee's attend?`,
            hen: (ans) => ans.role === "Intern",
        },
    ])
        .then((data) => {
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
        const newIntern = new Intern(data.name, data.id, data.email, data.school);
        console.log(data);
    });
}

function writeToFile(fileName, data) {
    fs.writeFile("./dist/"+fileName, data, (err) => {
        err ? console.log(err): console.log("Successfully generated HTML")
    } )
}

function init() {
    managerQuestions();
    .then(employeeQustions);

    
//     .then((data) => {
//     const newManager = new Manager(name, id, email, officeNumber);
//     const newIntern = new Intern(name, id, email, school);
//     const newEngineer = new Engineer(name, id, email, github);
//     writeToFile("index.html", generateHTML(data));
// })
};

init();


