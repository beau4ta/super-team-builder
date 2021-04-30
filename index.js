const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const team = [];

function init(){
    teamName();
}
init();

function teamName(){
    inquirer.prompt([
        {
            type: "input",
            message: "What would you like your team name to be?",
            name: "team"
        }
    ]).then(function(response) {
        if (response){
            createManager();
        }
    })
}

function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: [
                "Yes, add an Engineer",
                "Yes, add an Intern",
                "No"
            ],
            name: "add"
        },
    ]).then(function(response){
        switch (response.add) {
            case "Yes, add an Engineer":
                createEngineer();
                break;
            case "Yes, add an Intern": 
                createIntern();
                break;
            case "No":
                break;
        }
    })
}

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "name"
        },
        {   
            type: "input",
            message: "What is the Manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Manager's office number?",
            name: "number"
        }
    ]).then(function(response){
        if (response) {
            createTeam();
        }
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {   
            type: "input",
            message: "What is the Engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Engineer's GitHub username?",
            name: "github"

        }
    ]).then(function(response) {
        if (response) {
            createTeam();
        }
    })
};

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {   
            type: "input",
            message: "What is the Intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Intern's school?",
            name: "github"

        }
    ]).then(function(response){
        if (response) {
            createTeam();
        }
    })
};