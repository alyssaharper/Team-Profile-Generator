const Intern = require("../lib/intern");

test('does constructor come back as an object', () => {
    const objConstructor = new Intern();
    expect(typeof(objConstructor)).toBe('object');
});

test('do I get the intern name', () => {
    const holdName = "Bob";
    const getName = new Intern(holdName);
    expect(getName.name).toBe(holdName);
});

test('do I get the intern id', () => {
    const holdID = 1;
    const getId = new Intern('John', holdID);
    expect(getId.id).toBe(holdID);
})

test('do I get the intern email', () => {
    const holdEmail = "my@gmail.com";
    const getEmail = new Intern('John', 3, holdEmail);
    expect(getEmail.email).toBe(holdEmail);
})

test('do I get the intern school', () => {
    const holdSchool = "Michigan State University";
    const getSchool = new Intern('John', 3, "my@gmail.com", holdSchool);
    expect(getSchool.school).toBe(holdSchool);
})

test('does this return the name', () => {
    const holdName = "Bob";
    const getName = new Intern(holdName);
    expect(getName.getName()).toBe(holdName);
})
test('does this return intern id', () => {
    const holdID = 1;
    const getId = new Intern('John', holdID);
    expect(getId.getId()).toBe(holdID);
})

test('does this return intern email', () => {
    const holdEmail = "my@gmail.com";
    const getEmail = new Intern('John', 3, holdEmail);
    expect(getEmail.getEmail()).toBe(holdEmail);
})

test('does this return the intern school', () => {
    const holdSchool = "Michigan State University";
    const getSchool = new Intern('John', 3, "my@gmail.com", holdSchool);
    expect(getSchool.getSchool()).toBe(holdSchool);
})