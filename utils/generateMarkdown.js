// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description
${data.projectDescription}

## Table of Contents
- [User Story](#userStory)
- [Installation](#installationGuide)
- [Usage](#usage)
- [Authors](#authors)
- [License](#license)
- [Resources](#resources)

## User Story
${data.userStory}

## Installation instructions
${data.installationGuide}

## Usage instructions
${data.usage}

## Authors
${data.authors}

## License
${data.license}

## Resources
${data.resources}

`;
}

module.exports = generateMarkdown;
