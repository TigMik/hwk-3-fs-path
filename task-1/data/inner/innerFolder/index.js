const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Do you want to read example.json file ', (answer) => {
    if (['Y', 'y'].includes(answer)) {
        const pathToTheFile = path.join('.////', '..//////', '/../example.json')

        fs.promises.readFile(pathToTheFile)
            .then(res => console.log(res.toString()))
            .catch(err => console.log(err.message)) 
    }
    rl.close()
})







