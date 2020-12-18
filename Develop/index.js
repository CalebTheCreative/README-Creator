const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        // array of questions for user
        {
            type: 'input',
            name: 'title',
            message: "What is the project's title?"
        },
        {
            type: 'input',
            name: 'description',
            message: "What is the project's description?"
        },
        {
            type: 'input',
            name: 'installation',
            message: "What installation is needed for your project?"
        },
        {
            type: 'input',
            name: 'usage',
            message: "Please provide instructions and/or examples for using your project?"
        },
        {
            type: 'input',
            name: 'contribution',
            message: "What are the guidelines for contribution?"
        },
        {
            type: 'list',
            name: 'license',
            message: "What type of license would you like for this project?",
            choices: [
                "Apache",
                "MIT",
                "Mozilla",
                "Unlicense"
            ]
        },
        {
            type: 'input',
            name: 'test',
            message: "What are the instructions for running a test?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your GitHub username?"
        }
    ]);
};

// function to initialize program
const init = async () => {
    try {
        // Grab user input from promptUser() and send the answers into generateMarkdown.js
        const answers = await promptUser();
        const sendAnswers = generateMarkdown(answers);
        await writeFileAsync('README.md', sendAnswers);
        console.log("README.md file successfuly written!");
    } catch(err) {
        console.log(err);
    }
};

// function call to initialize program
init();
