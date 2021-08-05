const Engineer = require("../lib/engineer");

test('does constructor come back as an object', () => {
    const objConstructor = new Engineer();
    expect(typeof(objConstructor)).toBe('object');
});

test('do I get the engineer name', () => {
    const holdName = "Bob";
    const getName = new Engineer(holdName);
    expect(getName.name).toBe(holdName);
});

test('do I get the engineer id', () => {
    const holdID = 1;
    const getId = new Engineer('John', holdID);
    expect(getId.id).toBe(holdID);
})

test('do I get the engineer email', () => {
    const holdEmail = "my@gmail.com";
    const getEmail = new Engineer('John', 3, holdEmail);
    expect(getEmail.email).toBe(holdEmail);
})

test('do I get the engineer github name', () => {
    const holdGithub = "alyssaharper";
    const getGithub = new Engineer('John', 3, "my@gmail.com", holdGithub);
    expect(getGithub.github).toBe(holdGithub);
})

test('does this return the name', () => {
    const holdName = "Bob";
    const getName = new Engineer(holdName);
    expect(getName.getName()).toBe(holdName);
})
test('does this return engineer id', () => {
    const holdID = 1;
    const getId = new Engineer('John', holdID);
    expect(getId.getId()).toBe(holdID);
})

test('does this return engineer email', () => {
    const holdEmail = "my@gmail.com";
    const getEmail = new Engineer('John', 3, holdEmail);
    expect(getEmail.getEmail()).toBe(holdEmail);
})

test('does this return the engineer github name', () => {
    const holdGithub = "alyssaharper";
    const getGithub = new Engineer('John', 3, "my@gmail.com", holdGithub);
    expect(getGithub.getGithub()).toBe(holdGithub);
})

test('does this return the name', () => {
    const getRole = new Engineer('John', 3, "my@gmail.com");
    expect(getRole.getRole()).toBe("Engineer");
})