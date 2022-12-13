const csv = require('csvtojson')
const csvFilePath = "./public/nodejs-hw1-ex1.csv"
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
    })
