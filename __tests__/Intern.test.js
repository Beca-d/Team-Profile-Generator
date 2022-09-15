const Intern = require("../lib/intern");

//Test creation of Intern class
test("Creates and Intern class", () => {
    const testIntern = new Intern("Bartholomew", "001", "Saint.Bartholomew@gmail.com", "Richlands Institute of Tech");

    expect(testIntern.name).toBe("Bartholomew");
    expect(testIntern.id).toBe("001");
    expect(testIntern.email).toBe("Saint.Bartholomew@gmail.com")
    expect(testIntern.school).toBe("Richlands Institute of Tech")
});

test("Intern.getName() returns name property of Intern", () => {
    const testIntern = new Intern("Isabel", "002", "izzy_lex@gmail.com", "Richlands Institute of Tech");
    
    expect(testIntern.getName()).toBe("Isabel");
});

test("Intern.getId() returns id property of Intern", () => {
    const testIntern = new Intern("Tyrell", "003", "Tech_Ty@gmail.com", "Richlands Institute of Tech");
    
    expect(testIntern.getId()).toBe("003");
});

test("Intern.getEmail() returns email property of Intern", () => {
    const testIntern = new Intern("Zachary", "004", "West.Zachary@yahoo.com", "Richlands Institute of Tech");
    
    expect(testIntern.getEmail()).toBe("obanai.iguro@gmail.com")
});

test("Intern.getRole() returns 'Intern'", () => {
    const testIntern = new Intern("Theresa", "005", "Tessa.Johnson@gmail.com", "Richlands Institute of Tech");
    expect(testIntern.getRoll()).toBe("Intern");
});

test("Intern.getSchool() returns 'Richlands Institute of Tech'", () => {
    const testIntern = new Intern("Sasha", "006", "Sasha.B.Quinte@hotmail.com", "Richlands Institute of Tech");
    expect(testIntern.getSchool()).toBe("Richlands Institute of Tech");
});