const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const pageTemplate = require('./src/page-template.js');
const { copyFile, writeFile } = require('./utils/generate-site.js');


let validation = response => { // validation checker to prevent blank responses
    if (!response) {
        console.log(" --Response cannot be left blank! Please try again")
        return false
    } else {
        return true
    }
}

let emailValidation = response => { // checks for proper email format
    if(new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$').test(response)) {
        return true
    } else {
        console.log(" --Please re-enter the email address in proper format")
        return false
    }
}

// empty array for Team Members
let teamMembers =[] 

console.log("--------Build Your Team-----------")

// function to add Manager and begin building team
const addManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team Manager's name?",
                validate: validation
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team Manager's employee ID?",
                validate: validation
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team Manager's email?",
                validate: emailValidation
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "What is the Manager's office number?",
                validate: validation
            }
        ])
        .then(managerData => { //adds the manager into the team array
            teamMembers.push(new Manager(
                managerData.name, 
                managerData.id, 
                managerData.email, 
                managerData.officeNum
                ));    
            addEmployee(); // runs function to either add employee or finish team building
        });
};


// Stop building team or select role of next employee
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select one of the below option',
            choices: ['Add Engineer', 'Add an Intern', 'Team is Complete']
        },
    ]).then(data => {
        switch (data.choice) {
            case "Add Engineer":
                addEngineer()
                break;

            case "Add an Intern":
                addIntern();
                break;
            default: 
                {
                    const data = pageTemplate(teamMembers);
                    writeFile(data)
                    .then(writeFileResponse =>{
                        console.log(writeFileResponse);
                        copyFile();
                    });
                }
        }
    });

}// add an engineer to the team
const addEngineer = async () => {
    return inquirer.prompt([        
        { 
            type: 'input', 
            name: 'name',
            message: "What is the Employee's name?",
            validate: validation
        },
        { 
            type: 'input', 
            name: 'id',
            message: "What is the Employee's ID?",
            validate: validation
        },
        { 
            type: 'input',
            name: 'email', 
            message: "What is the Employee's email?",
            validate: emailValidation
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Employee's GitHub?",
            validate: validation
        }
    ])
    .then(engineerData => { // pushes engineer into the array
        teamMembers.push (new Engineer(
            engineerData.name,
            engineerData.id,
            engineerData.email,
            engineerData.github
            ));        
        addEmployee();
    });
};
// add an intern to the team
const addIntern = async () => {
    return inquirer.prompt([
        { 
            type: 'input', 
            name: 'name',
            message: "What is the Employee's name?",
            validate: validation
        },
        { 
            type: 'input', 
            name: 'id',
            message: "What is the Employee's ID?",
            validate: validation
        },
        { 
            type: 'input',
            name: 'email', 
            message: "What is the Employee's email?",
            validate: emailValidation
        },
        { 
            type: 'input',
            name: 'school',
            message: "What school is the employee currently attending?", 
            validate: validation
        }
    ]).then(InternData => { // pushes intern into the team array
        teamMembers.push (new Intern(
            InternData.name,
            InternData.id,
            InternData.email,
            InternData.school
            ));       
        addEmployee();
    });
};

addManager();
