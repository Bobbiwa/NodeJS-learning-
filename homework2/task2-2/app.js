import express from 'express'
import bodyParser from 'body-parser'
import router from './router'

const app = express()

//开放public
app.use('/public',express.static('./task2-2/public'))

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置art-template
app.engine('html', require('express-art-template'))

//配置路由
app.use(router)

app.listen(3000,()=>{
    console.log('port is 3000');
})