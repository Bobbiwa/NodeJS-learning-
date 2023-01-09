import csv from 'csvtojson'
const csvFilePath = "./task1-3/public/nodejs-hw1-ex1.csv"
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
    })