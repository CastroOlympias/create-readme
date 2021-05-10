// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'yourName',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub name?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your Prject name?'
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data.yourName, data.githubName, data.projectName);
        writeToFile('readMe.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
