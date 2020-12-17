// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  let readMe = `# ${data.title}
## Description
${data.description}

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Test])(#test)
* [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributiion
${data.contribution}

## License
${data.license}

## Test
${data.test}

## Contact
${data.email}
${data.github}
`;
}

module.exports = generateMarkdown;
