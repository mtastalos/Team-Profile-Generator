const fs = require('fs');

const cssSheet = `
* {
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
    min-width: 350px
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

// writing files
module.exports = fileContent => {

    new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
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

    new Promise((resolve, reject) => {
        fs.writeFile('./dist/style.css', cssSheet, err => {
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

