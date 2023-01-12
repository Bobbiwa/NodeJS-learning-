import csv from 'csvtojson'
import path from 'path'

const csvFilePath = path.join(__dirname,'/public/nodejs-hw1-ex1.csv')
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
    })