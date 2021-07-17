const csv = require('csvtojson')
const fs = require('fs');

const csvFilePath = 'addresses.csv';


csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const fileContent = JSON.stringify(jsonObj);

    try {
        fs.writeFileSync('addresses.json', fileContent);
    } catch (error) {
        console.log(error.message);
    }

})


