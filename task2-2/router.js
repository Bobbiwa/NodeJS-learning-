const express = require('express')
const Joi = require('joi')
const Validator = require('express-joi-validation').createValidator({})

const router = express.Router()

//渲染login page
router.get('/', (req, res) => {
    res.render('login.art')
})

//配置validation对象
const querySchema = Joi.object({
    login:Joi.string().required(),
    password:Joi.string().required(),
    age:Joi.number().required()
})

router.post('/post',Validator.body(querySchema),(req,res)=>{
    res.send(req.body)
})

module.exports = router