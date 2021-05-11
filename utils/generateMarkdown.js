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
- [User Story](#userStory)
- [Installation Guide](#installationGuide)
- [Usage Guide](#usageGuide)
- [Authors](#authors)
- [License](#license)
- [Resources](#resources)

## userStory
${data.userStory}

## installationGuide
${data.installationGuide}

## usageGuide
${data.usageGuide}

## authors
${data.authors}

## license
${data.license}

## resources
${data.resources}

`;
}

module.exports = generateMarkdown;
