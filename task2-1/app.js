const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const swaggerInstall = require('./utils/swagger')

const app = express()

swaggerInstall(app)

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置路由
app.use(router)

app.listen(3000,()=>{
    console.log('port is 3000\nPlease visit http://127.0.0.1:3000/swagger for API document');
})
