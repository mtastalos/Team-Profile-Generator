const addTeamMember = (memberArray) => {
    console.log(memberArray[0].getRole())
    console.log(memberArray[0].getRole()== 'Manager')
    let section = ''
    for (x=0;x<memberArray.length;x++){
        if (memberArray[x].getRole() == 'Manager'){
            personDiv =  `
                <div class="person">
                        <div class="head-info">
                            <h2 class="name">${memberArray[x].getName()}</h2>
                            <h3 class="category"><i class="fas fa-mug-hot"></i>${memberArray[x].getRole()}</h3>
                        </div>
                        <div class="body-info">
                            <div class="id row">ID: ${memberArray[x].getId()}</div>
                            <div class="email row"><p>Email: <a href='mailto:${memberArray[x].getEmail()}'>${memberArray[x].getEmail()}</a></p></div>
                            <div class="personal-info row">Office Number: ${memberArray[x].getOfficeNumber()}</div>
                        </div>
                    </div>
                `;
        }
        else if (memberArray[x].getRole() == 'Engineer') {
            personDiv = `
                <div class="person">
                        <div class="head-info">
                            <h2 class="name">${memberArray[x].getName()}</h2>
                            <h3 class="category"><i class="fas fa-glasses"></i>${memberArray[x].getRole()}</h3>
                        </div>
                        <div class="body-info">
                            <div class="id row">ID: ${memberArray[x].getId()}</div>
                            <div class="email row"><p>Email: <a href='mailto:${memberArray[x].getEmail()}'>${memberArray[x].getEmail()}</a></p></div>
                            <div class="personal-info row">GitHub: <a href='https://github.com/${memberArray[x].getGithub()}'>https://github.com/${memberArray[x].getGithub()}</a></div>
                        </div>
                    </div>
                `;
        }
        else if (memberArray[x].getRole() == 'Intern') {
            personDiv = `
                <div class="person">
                        <div class="head-info">
                            <h2 class="name">${memberArray[x].getName()}</h2>
                            <h3 class="category"><i class="fas fa-user-graduate"></i>${memberArray[x].getRole()}</h3>
                        </div>
                        <div class="body-info">
                            <div class="id row">ID: ${memberArray[x].getId()}</div>
                            <div class="email row"><p>Email: <a href='mailto:${memberArray[x].getEmail()}'>${memberArray[x].getEmail()}</a></p></div>
                            <div class="personal-info row">School: ${memberArray[x].getSchool()}</div>
                        </div>
                    </div>
                `;
        }
        section = section + personDiv
    }
    
    return section;
}


module.exports = templateData => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></script>
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        
        <section class="container">
            ${addTeamMember(templateData)}
        </section>
    </body>
    </html>`;

}
