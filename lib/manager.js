const Employee = require('../lib/employee');
class Manager extends Employee {

    //Manager Object attributes
    constructor(name, id, email, officeNum) {
        super(name,id,email);
        this.officeNum = officeNum;
    }
    
    // Get Office Number
    getOfficeNum() {
        return this.officeNum;
    }

    // Get Role
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;