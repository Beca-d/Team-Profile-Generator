const inquirer = require('inquirer');
const Employee = require('../lib/employee');
const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const generatePage = require('./src/page-template.js');
const { copyFile, writeFile } = require('./utils/generate-site.js');


let validation = response => { // validation checker to prevent blank responses
    if (!response) {
        console.log("Response cannot be left blank! Please try again")
        return false
    } else {
        return true
    }
}

let emailValidation = response => { // checks for proper email format
    if(new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$').test(response)) {
        return true
    } else {
        console.log("Please re-enter the email address in proper format")
        return false
    }
}

// empty array for Team Members
let teamMembers =[] 

const addManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input', // asks managers name
                name: 'managerName',
                message: "What is the team Manager's name?",
                validate: validation
            },
            {
                type: 'input', // asks managers ID. string so people can enter any character if their ID isnt numerical
                name: 'managerID',
                message: "What is the team Manager's employee ID?",
                validate: validation
            },
            {
                type: 'input', // asks managers email
                name: 'managerEmail',
                message: "What is the team Manager's email?",
                validate: emailValidation
            },
            {
                type: 'input', // asks managers phone number
                name: 'managerNum',
                message: "What is the team Manager's office number? If they have an extension, please enter ext. [XYZ] after the phone number. ",
                validate: validation
            }
        ])
        .then(employeeData => {
            const { managerName, managerID, managerEmail, managerNum } = employeeData
            const manager = new Manager(managerName, managerID, managerEmail, managerNum)
            team.push(manager)
        }
        )
}
