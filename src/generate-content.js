const addTeamMember = (memberArray) => {
    let section = ''
    for (x=0;x<memberArray.length;x++){
        if (memberArray[x].getRole() == 'Manager'){
            personDiv =  `
                <div class="person">
                        <div class="head-info">
                            <h2 class="name">${memberArray[x].getName()}</h2>
                            <h3 class="category"><i class="fas fa-mug-hot"> </i> ${memberArray[x].getRole()}</h3>
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
                            <h3 class="category"><i class="fas fa-glasses"> </i> ${memberArray[x].getRole()}</h3>
                        </div>
                        <div class="body-info">
                            <div class="id row">ID: ${memberArray[x].getId()}</div>
                            <div class="email row"><p>Email: <a href='mailto:${memberArray[x].getEmail()}'>${memberArray[x].getEmail()}</a></p></div>
                            <div class="personal-info row">GitHub: <a href='https://github.com/${memberArray[x].getGithub()}' target='_blank' rel="noopener noreferrer">${memberArray[x].getGithub()}</a></div>
                        </div>
                    </div>
                `;
        }
        else if (memberArray[x].getRole() == 'Intern') {
            personDiv = `
                <div class="person">
                        <div class="head-info">
                            <h2 class="name">${memberArray[x].getName()}</h2>
                            <h3 class="category"><i class="fas fa-user-graduate"> </i> ${memberArray[x].getRole()}</h3>
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
    
    console.log('Your files have been generated! View them in the Dist folder.')
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
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
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
