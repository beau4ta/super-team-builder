const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const team = [];

function init(){
    startHTML();
    createManager();
}
init();

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
                endHTML();
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
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const number = response.number;
        const manager = new Manager(name, id, email, number);
        team.push(manager)
        createTeam();
        addCardHTML(manager);
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
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const github = response.github;
        const engineer = new Engineer(name, id, email, github);
        team.push(engineer);
        createTeam();
        addCardHTML(engineer);
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
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const school = response.school;
        const intern = new Intern(name, id, email, school);
        team.push(intern);
        createTeam();
        addCardHTML(intern);
    })
};

function startHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Super Team Builder</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <nav class="navbar navbar-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Super Team Builder</span>
            </div>
          </nav>`;

          console.log("START");

        fs.writeFile("./dist/index.html", html, function(err) {
            if (err) {
                console.log(err);
            }
        })
}

function addCardHTML(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = '';
        if (role === "Engineer") {
            const github = member.getGithub();
            data = `<br>
            <div class="row">
            <div class="empty col-md-4"></div>
            <div class="card-container col-md-4">
                <div class="card">
                    <div class="card-body">
                    <h1 class="card-title">${name}</h1>
                    <h2 class="card-subtitle mb-2 text-muted">${role}</h2>
                    <p class="github">${github}</p>
                    <a href="mailto: ${email}">${email}</a>
                    <p class="id">${id}</p>
                    </div>
                </div>
            </div>
        </div>`
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="empty col-md-4"></div>
            <div class="card-container col-md-4">
                <div class="card">
                    <div class="card-body">
                    <h1 class="card-title">${name}</h1>
                    <h2 class="card-subtitle mb-2 text-muted">${role}</h2>
                    <p class="school">${school}</p>
                    <a href="mailto: ${email}">${email}</a>
                    <p class="id">${id}</p>
                    </div>
                </div>
            </div>
        </div>`
        } else {
            const number = member.getNumber();
            data = `<div class="row"></div>
            <div class="empty col-md-4"></div>
            <div class="card-container col-md-4">
                <div class="card">
                    <div class="card-body">
                    <h1 class="card-title">${name}</h1>
                    <h2 class="card-subtitle mb-2 text-muted">${role}</h2>
                    <p class="number">${number}</p>
                    <a href="mailto: ${email}">${email}</a>
                    <p class="id">${id}</p>
                    </div>
                </div>
            </div>
        </div>`
        }
        fs.appendFile("./dist/index.html", data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function endHTML() {
    const html = `
    </body>
    </html>`;
    console.log("END")

    fs.appendFile("./dist/index.html", html, function (err){
        if (err) {
            console.log(err);
        }
    })
}