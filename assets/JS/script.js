class Member{
    constructor(name, category, id, email, wildcard){
      this.name = name;
      this.category = category;
      this.id = id;
      this.email = email;
      this.wildcard = wildcard;
    }
}

class Team{
    constructor(){
      this.team = [];
    }

    newMember(name, category, id, email, wildcard){
        let teamMember = new Member(name, category, id, email, wildcard);
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