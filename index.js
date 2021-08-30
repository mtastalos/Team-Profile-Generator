const inquirer = require('inquirer');
const generatePage = require('./src/generate-file');
const generateContent = require('./src/generate-content');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const {managerQuestions, engineerQuestions, internQuestions} = require('./src/prompts');
let teamInfo = []

const promptManager = () => {
  console.log(`
  ================
  Adding a Manager
  ================
  `)
  return inquirer.prompt(managerQuestions)
  .then(answer => {
    const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
    teamInfo.push(manager);
  })
}

function promptTeamInfo() {

  return inquirer.prompt([
    {
      type: 'list',
      name: 'category',
      message: 'Would you like to add an Engineer or Intern to this project?',
      choices: ['Engineer', 'Intern', 'Stop adding']
    }
  ])
  .then(decision => {
    if(decision.category == 'Stop adding') {
      let x = generateContent(teamInfo)
      return generatePage(x);
    }
    else {
      console.log(`
      ====================
      Adding a Team Member
      ====================
      `);
      if(decision.category == 'Engineer'){
        inquirer.prompt(engineerQuestions)
        .then(answer => {
          const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
          teamInfo.push(engineer)
          promptTeamInfo()
        })
      }
      else if (decision.category == 'Intern'){
        inquirer.prompt(internQuestions)
        .then(answer => {
          const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
          teamInfo.push(intern)
          promptTeamInfo();
        })
      }
    }
  })
}


console.log("You're about to create a team for a project")
promptManager()
.then(promptTeamInfo)
.catch(err => {
  console.log(err);
})


