const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

.then((inquirer) => {
    const newManager = new Manager(name, id, email, officeNumber);
    const newIntern = new Intern(name, id, email, school);
    const newEngineer = new Engineer(name, id, email, github);
}
)


