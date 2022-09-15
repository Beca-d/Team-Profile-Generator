const Employee = require('../lib/employee');
class Engineer extends Employee {

    //Engineer Object attributes
    constructor(name, id, email, github) {
        super(name,id,email);
        this.github = github;
    }
    
    // Get GitHub username
    getGithub() {
        return this.github;
    }

    // Get Role
    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;