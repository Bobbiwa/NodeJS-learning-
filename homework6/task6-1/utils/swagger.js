import path from 'path'
import express from 'express'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from 'swagger-jsdoc'
// const path = require('path')
// const express = require('express')
// const swaggerUI = require('swagger-ui-express')
// const swaggerDoc = require('swagger-jsdoc')
//配置swagger-jsdoc
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'UserApi',
            version: '1.0.0',
            description: `User's CRUD api`
        }
    },
    // 去哪个路由下收集 swagger 注释
    apis: ['./task3-1/swaggerComments.js']
}
const swaggerSpec = swaggerDoc(options)

var swaggerJson = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
}
var swaggerInstall = function (app) {
    if (!app) {
        app = express()
    }
    // 开放相关接口，
    app.get('/swagger.json', swaggerJson);
    // 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
    app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}
module.exports = swaggerInstall 