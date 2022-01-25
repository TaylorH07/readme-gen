// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)`;
  } else {
    return ' ';
  }
};
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'no license') {
      return `
      [${license}](https://choosealicense.com/licenses/${data.license})`;

    } else {
      return ' ';
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    return ` ## License
    This project uses the following license: ${data.license}`
  }

  // TODO: Create a function to generate markdown for README
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `

## ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Table of Contents
- [Description](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Installation
${data.installation}

## Usage
${data.usage}

This application is covered by the ${data.license} license. 

## Contributing
${data.contributing}

## Tests
✏️ ${data.tests}

## Questions
If you have any questions email me at :
${data.questions}


Find me on GitHub: [${data.username}](https://github.com/${data.username})


This README was generated with ❤️ by [readme-gen](https://github.com/TaylorH07/readme-gen) 
    
`;
}

  module.exports = generateMarkdown;