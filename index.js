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
        name: 'userStory',
        message: 'Please tell us what inspired you or your to create the app?'
    },
    {
        type: 'input',
        name: 'installationGuide',
        message: 'Please provide guidance for installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the app?'
    },
    {
        type: 'input',
        name: 'authors',
        message: 'Who are the contributing authors?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please tell us under what license this is under?'
    },
    {
        type: 'input',
        name: 'resources',
        message: 'Please let us know of any resources you used to aid in the project?'
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
