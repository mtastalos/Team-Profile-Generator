const inquirer = require('inquirer');
const generatePage = require('../dist/generate-content');

class Employee{
    constructor(name, category, id, email, other){
      this.name = name;
      this.category = category;
      this.id = id;
      this.email = email;
      this.other = other;
    }
}

class Manager{
  constructor(name, category, id, email, other){
    this.name = name;
    this.category = category;
    this.id = id;
    this.email = email;
    this.other = other;
  }
}

class Engineer{
  constructor(name, category, id, email, other){
    this.name = name;
    this.category = category;
    this.id = id;
    this.email = email;
    this.other = other;
  }
}

class Intern{
  constructor(name, category, id, email, other){
    this.name = name;
    this.category = category;
    this.id = id;
    this.email = email;
    this.other = other;
  }
}

class Team{
    constructor(){
      this.team = [];
    }

    newMember(name, category, id, email, other){
      switch (category){
        case 'Employee':
          let teamMember = new Employee(name, category, id, email, other);
          break;  
        case 'Manager':
          let teamMember = new Manager(name, category, id, email, other);
          break;
        case 'Engineer':
          let teamMember = new Engineer(name, category, id, email, other);
          break;
        case 'Intern':
          let teamMember = new Intern(name, category, id, email, other);\
          break;
      }
        this.team.push(teamMember);
    }

    get teamMemebers(){
        return this.players;
    }

    get numberOfTeammates(){
        return this.players.length;
    }

    generatePage() {

    }
}

const promptMemberInfo = memberInfo => {
    console.log(`
  =================
  Add a Team Member
  =================
  `);
  
if (!memberInfo.projects) {
    memberInfo.projects = [];
  }

}