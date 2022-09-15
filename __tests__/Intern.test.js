const Intern = require("../lib/intern");

//Test creation of Intern class
test("Creates and Intern class", () => {
    const testIntern = new Intern("Bartholomew", "001", "Saint.Bartholomew@gmail.com", "Richlands Institute of Tech");

    expect(testIntern.name).toBe("Bartholomew");
    expect(testIntern.id).toBe("001");
    expect(testIntern.email).toBe("Saint.Bartholomew@gmail.com")
    expect(testIntern.school).toBe("Richlands Institute of Tech")
});

test("get intern's name", () => {
    const testIntern = new Intern("Isabel", "002", "izzy_lex@gmail.com", "Richlands Institute of Tech");
    
    expect(testIntern.getName()).toBe("Isabel");
});

test("get intern's ID", () => {
    const testIntern = new Intern("Tyrell", "003", "Tech_Ty@gmail.com", "Richlands Institute of Tech");
    
    expect(testIntern.getId()).toBe("003");
});

test("get intern's email", () => {
    const testIntern = new Intern("Zachary", "004", "West.Zachary@yahoo.com", "Richlands Institute of Tech");
    
    expect(testIntern.getEmail()).toBe("obanai.iguro@gmail.com")
});

test("get intern's role", () => {
    const testIntern = new Intern("Theresa", "005", "Tessa.Johnson@gmail.com", "Richlands Institute of Tech");
    expect(testIntern.getRoll()).toBe("Intern");
});

test("get intern's school", () => {
    const testIntern = new Intern("Sasha", "006", "Sasha.B.Quinte@hotmail.com", "Richlands Institute of Tech");
    expect(testIntern.getSchool()).toBe("Richlands Institute of Tech");
});