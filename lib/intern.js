const Employee = require('../lib/employee');
class Intern extends Employee{

    constructor(name, id, email, school) {
        super(name,id,email);
        this.school = school;
    }
    
    // Get School
    getSchool() {
        return this.school;
    }

    // Get Role
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;