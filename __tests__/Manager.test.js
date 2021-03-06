const Manager = require("../lib/manager");

test('does constructor come back as an object', () => {
    const objConstructor = new Manager();
    expect(typeof(objConstructor)).toBe('object');
});

test('do I get the manager name', () => {
    const holdName = "Bob";
    const getName = new Manager(holdName);
    expect(getName.name).toBe(holdName);
});

test('do I get the manager id', () => {
    const holdID = 1;
    const getId = new Manager('John', holdID);
    expect(getId.id).toBe(holdID);
})

test('do I get the manager email', () => {
    const holdEmail = "my@gmail.com";
    const getEmail = new Manager('John', 3, holdEmail);
    expect(getEmail.email).toBe(holdEmail);
})

test('do I get the manager office number', () => {
    const holdOfficeNum = "25";
    const getOfficeNum = new Manager('John', 3, "my@gmail.com", holdOfficeNum);
    expect(getOfficeNum.officeNumber).toBe(holdOfficeNum);
})

test('does this return the name', () => {
    const holdName = "Bob";
    const getName = new Manager(holdName);
    expect(getName.getName()).toBe(holdName);
})
test('does this return manager id', () => {
    const holdID = 1;
    const getId = new Manager('John', holdID);
    expect(getId.getId()).toBe(holdID);
})

test('does this return manager email', () => {
    const holdEmail = "my@gmail.com";
    const getEmail = new Manager('John', 3, holdEmail);
    expect(getEmail.getEmail()).toBe(holdEmail);
})

test('does this return the manager office number', () => {
    const holdOfficeNum = "25";
    const getOfficeNum = new Manager('John', 3, "my@gmail.com", holdOfficeNum);
    expect(getOfficeNum.getOfficeNumber()).toBe(holdOfficeNum);
})

test('does this return the name', () => {
    const getRole = new Manager('John', 3, "my@gmail.com");
    expect(getRole.getRole()).toBe("Manager");
})