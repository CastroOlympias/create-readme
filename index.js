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
        name: 'projectImage',
        message: 'Would you like to add an image of your project?'
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
        name: 'usageGuide',
        message: 'How do you use the app?'
    },
    {
        type: 'input',
        name: 'authors',
        message: 'Who are the contributing authors?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please tell us under what license this is under?', 
        choices: ['MIT', 'BSD3', 'APACHE2.0', 'FUNK', 'NONE']
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
        console.log(data.projectName, data.projectDescription, data.projectImage, data.userStory, data.installationGuide, data.usageGuide, data.authors, data.license, data.resources);
        writeToFile('README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
