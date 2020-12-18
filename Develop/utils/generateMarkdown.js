// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  return `# ${answers.title}
## Description
${answers.description}

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [License](#license)
* [Tests](#tests)
* [Contact](#contact)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## License
${answers.license}

## Tests
${answers.test}

## Contact
**Email:** ${answers.email}
**GitHub Profile:** [${answers.github}](https://github.com/${answers.github})
`;
}

module.exports = generateMarkdown;
