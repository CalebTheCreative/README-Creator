// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
## Description
${data.description}

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Tests](#tests)
* [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributiion
${data.contribution}

## License
${data.license}

## Tests
${data.test}

## Contact
${data.email}
${data.github}
`;
}

module.exports = generateMarkdown;
