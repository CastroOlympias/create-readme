// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'NONE') {
    return ""
  } else {
    return `![githublicense](https://img.shields.io/badge/License-${license}-green.png)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'NONE') {
    return ""
  } else {
    return `\n- [License](#License) `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'NONE') {
    return ""
  } else {
    return `## License
    https://choosealicense.com/licenses/${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
# ${data.projectName}

## Description
  ${data.projectDescription}

<img src="${data.projectImage}"/>

## Table of Contents
- [Story](#Story)
- [Installation](#Installation)
- [Usage](#Usage)
- [Authors](#Authors)
- [Resources](#Resources)
${renderLicenseLink(data.license)}

## Story
  ${data.userStory}

## Installation
  ${data.installationGuide}

## Usage
  ${data.usageGuide}

## Authors
  ${data.authors}

${renderLicenseSection(data.license)}

## Resources
  ${data.resources}

## Questions
  ${data.githubName}
  ${data.eMailAddress}
`;
}

module.exports = generateMarkdown;
