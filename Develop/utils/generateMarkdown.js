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

## Contributors
${data.contributors}

## License
${data.license}

## Test
${data.test}

## Contact
${data.contact}
`;
}

module.exports = generateMarkdown;
