const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeTitle',
            message: 'Please select the role of the employee you are adding:',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: `What is the employee's name?`,
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
        
    ])
}

function init() {
    questions();
    .then((data) => {
    const newManager = new Manager(name, id, email, officeNumber);
    const newIntern = new Intern(name, id, email, school);
    const newEngineer = new Engineer(name, id, email, github);
}
)
};

init();


