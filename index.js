// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please Enter GitHub Repository.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter the title of your project.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a description of your project.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        name: 'license',
        choices: ['GNU AGPLv3',
        'GNU GPLv3',
        'GNU LGPLv3',
        'Mozilla Public License 2.0', 
        'Apache License 2.0', 
        'MIT License', 
        'Boost Software License 1.0', 
        'The Unlicense'],

    },
    {
        type: 'input',
        message: "Describe the steps required to install your project (if applicable)",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how other developers can contribute to your project (if applicable).",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application and provide examples on how to run them (if applicable).",
        name: 'tests'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Congrats! You have generated your README.md file!")
    });
}

const writeFileAsync = util.promisify(writeToFile);


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown)
    })
};
// Function call to initialize app
init();
