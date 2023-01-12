const fs = require('fs')
const csv = require('csvtojson')
const path = require('path')

const csvFilePath = path.join(__dirname,'/public/nodejs-hw1-ex1.csv') 
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
    })

const readStream = fs.createReadStream( path.join(__dirname,'/public/nodejs-hw1-ex1.csv'))
const writeStream = fs.createWriteStream(path.join(__dirname,'/public/nodejs-hw1-ex1.txt'))

readStream.pipe(csv()).pipe(writeStream);