const Intern = require("../lib/intern");

//Test creation of Intern object
test("create intern object", () => {
    const intern = new Intern("Bartholomew", "001", "Saint.Bartholomew@gmail.com", "Richlands Institute of Tech");

    expect(intern.name).toBe("Bartholomew");
    expect(intern.id).toBe("001");
    expect(intern.email).toBe("Saint.Bartholomew@gmail.com")
    expect(intern.school).toBe("Richlands Institute of Tech")
});

test("get intern name", () => {
    const intern = new Intern("Isabel", "002", "izzy_lex@gmail.com", "Richlands Institute of Tech");
    
    expect(intern.getName()).toBe("Isabel");
});

test("get intern ID", () => {
    const intern = new Intern("Tyrell", "003", "Tech_Ty@gmail.com", "Richlands Institute of Tech");
    
    expect(intern.getId()).toBe("003");
});

test("get intern email", () => {
    const intern = new Intern("Zachary", "004", "West.Zachary@yahoo.com", "Richlands Institute of Tech");
    
    expect(intern.getEmail()).toBe("obanai.iguro@gmail.com")
});

test("get intern role", () => {
    const intern = new Intern("Theresa", "005", "Tessa.Johnson@gmail.com", "Richlands Institute of Tech");
    expect(intern.getRoll()).toBe("Intern");
});

test("get intern school", () => {
    const intern = new Intern("Sasha", "006", "Sasha.B.Quinte@hotmail.com", "Richlands Institute of Tech");
    expect(intern.getSchool()).toBe("Richlands Institute of Tech");
});