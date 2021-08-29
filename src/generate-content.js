const fs = require('fs');

// writing files
const writeFile = fileContent => {
  new Promise((resolve, reject) => {
    fs.writeFile('../../createdTeamPage/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });

  return new Promise((resolve, reject) => {
    fs.writeFile('../../createdTeamPage/style.css', cssSheet, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

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
    const page = `<!DOCTYPE html>
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

    return writeFile(page);
}

const cssSheet = `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Times New Roman', Times, serif;
}

header{
    width: 100%;
    height: 200px;
    background-color: rgb(156, 20, 15);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
}

.container {
    display: flex;
    height: auto;
    width: 75%;
    margin: 150px auto 0 auto;
    justify-content: center;
    flex-wrap: wrap;
}

.person{
    box-shadow: 3px 3px 8px grey;
    margin: 0 10px 20px 10px;
    width: 250px;
}

.person .head-info {
    background-color: rgb(0, 119, 255);
    height: 100px;
}

.person .head-info .name, .person .head-info .category {
    padding: 15px 0 0 15px;
    color: white;
    font-size: 30px;
}

.person .head-info .category {
    padding: 5px 0 15px 15px;
    font-size: 25px;
}

.body-info {
    margin: 35px 20px 35px 20px;
}

.body-info .row {
    border: 1px solid rgb(172, 170, 170);
    border-width: thin;
    padding: 15px;
}`