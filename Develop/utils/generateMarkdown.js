// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  return `# ${answers.title}
## Description
${answers.description}

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} license

![badge](https://img.shields.io/badge/license-${answers.license}-9cf&?style=for-the-badge&logo=appveyor)

## Contribution
${answers.contribution}

## Tests
${answers.test}

## Questions
**Email:** ${answers.email}

**GitHub Profile:** [${answers.github}](https://github.com/${answers.github})
`;
}

module.exports = generateMarkdown;
