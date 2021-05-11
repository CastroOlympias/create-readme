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

<img src="${data.projectImage}"/>

## Table of Contents
- [User Story](#User Story)
- [Installation Guide](#Installation Guide)
- [Usage Guide](#Usage Guide)
- [Authors](#Authors)
- [License](#License)
- [Resources](#Resources)

## User Story
${data.userStory}

## Installation Guide
${data.installationGuide}

## Usage Guide
${data.usageGuide}

## Authors
${data.authors}

## License
${data.license}

## Resources
${data.resources}

`;
}

module.exports = generateMarkdown;
