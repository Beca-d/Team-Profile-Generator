const Employee = require('../lib/employee');
class Manager extends Employee {

    //Manager Object attributes
    constructor(name, id, email, officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    
    // Get Office Number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Get Role
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;