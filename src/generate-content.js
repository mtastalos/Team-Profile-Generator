const addTeamMember = (memberArray,content) => {
    let content = content||``;
    let personDiv;
    
    if (memberArray){
        personDiv =  `
            <div class="person">
                    <div class="head-info">
                        <h2 class="name">${memberArray}</h2>
                        <h3 class="category">${memberArray}</h3>
                    </div>
                    <div class="body-info">
                        <div class="id row">ID: ${memberArray}</div>
                        <div class="email row"><p>Email: ${memberArray}</p></div>
                        <div class="personal-info row">${memberArray}</div>
                    </div>
                </div>
            `;
    }
    else {
        personDiv = `
            <div class="person">
                    <div class="head-info">
                        <h2 class="name">${memberArray}</h2>
                        <h3 class="category">${memberArray}</h3>
                    </div>
                    <div class="body-info">
                        <div class="id row">ID: ${memberArray}</div>
                        <div class="email row"><p>Email: ${memberArray}</p></div>
                        <div class="personal-info row">${memberArray}</div>
                    </div>
                </div>
            `;
    }

    return content.append(personDiv);
}

module.exports = templateData => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./assets/CSS/styles.css">
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
