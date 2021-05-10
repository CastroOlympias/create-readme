// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is name of your project?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description?'
    },
    {
        type: 'input',
        name: 'installationGuide',
        message: 'Please provide guidance for installation'
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
