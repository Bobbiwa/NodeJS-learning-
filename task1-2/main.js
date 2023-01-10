const fs = require('fs')
const csv = require('csvtojson')
const csvFilePath = "./task1-2/public/nodejs-hw1-ex1.csv"
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
    })

const readStream = fs.createReadStream("./task1-2/public/nodejs-hw1-ex1.csv")
const writeStream = fs.createWriteStream("./task1-2/txt/nodejs-hw1-ex1.txt")

readStream.pipe(csv()).pipe(writeStream);