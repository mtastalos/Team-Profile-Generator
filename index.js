const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const questions = require('./src/prompts');
let teamInfo = []

const promptManager = () => {
  console.log(`
  ================
  Adding a Manager
  ================
  `)
  return inquirer.prompt(questions.managerQuestions)
  .then(answer => {
    const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
    teamInfo.push(manager);
  })
}

const promptTeamInfo = TeamInfo => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'category',
      message: 'Would you like to add and Engineer or Intern to this project?',
      choices: ['Engineer', 'Intern', 'Stop adding']
    }
  ])
  .then(function(decision){
    if(decision.category == 'Stop adding') {
     return TeamInfo
    }
    else {
      console.log(`
      ====================
      Adding a Team Member
      ====================
      `);
      if(decision.category == 'Engineer'){
        inquirer.prompt(questions.engineerQuestions)
        .then(answer => {
          const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
          teamInfo.push(engineer)
          return teamInfo;
        });
      }
      else {
        inquirer.prompt(questions.internQuestions)
        .then(answer => {
          const intern = new Engineer(answer.name, answer.id, answer.email, answer.school);
          teamInfo.push(intern)
          return teamInfo;
        });
      }
    }
  })
}

function init() {
  console.log("You're about to create a team for a project")
}

init();