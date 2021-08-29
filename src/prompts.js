const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter team manager's name.",
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
                console.log('Please enter in a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please provide associates ID number.',
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
                console.log('Please enter in a Identification Number!');
                return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a email address.',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
                console.log('Please enter in a email address!');
                return false;
          }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please state the office number of the associate.',
        validate: OFInput => {
            if (OFInput) {
            return true;
            } else {
                console.log('Please provide a office number!');
                return false;
          }
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter engineer's name.",
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
                console.log('Please enter in a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please provide associates ID number.',
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
                console.log('Please enter in a Identification Number!');
                return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a email address.',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
                console.log('Please enter in a email address!');
                return false;
          }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please share your GitHub username.',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
                console.log('Please provide a username!');
                return false;
          }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter intern's name.",
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
                console.log('Please enter in a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please provide associates ID number.',
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
                console.log('Please enter in a Identification Number!');
                return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a email address.',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
                console.log('Please enter in a email address!');
                return false;
          }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please state the educational system you're attedning.",
        validate: schoolInput => {
            if (schoolInput) {
            return true;
            } else {
                console.log('Please provide the name of your school!');
                return false;
          }
        }
    }
];

module.exports = {managerQuestions, engineerQuestions, internQuestions}