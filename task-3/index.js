const decompress = require('decompress');
const fs = require('fs');
const path = require('path');

// unzipping
// decompress('node_modules.zip', 'dist').then(files => {
//     console.log('done!');
// });


function printDirectoryStructure(dirpath, str = '') {
    const files = fs.readdirSync(dirpath);
    
    files.forEach( file => {
        let pathToFile = dirpath + '/' + file;

        if (fs.statSync(pathToFile).isFile()) {
            console.log(str + file);
        } else if (fs.statSync(pathToFile).isDirectory()) {
            console.log(str + file);
            const tmp = str
            str += '  ';
            printDirectoryStructure(pathToFile, str);
            str = tmp
        }        
    })
}

const p = path.resolve('dist/');
printDirectoryStructure(p);









