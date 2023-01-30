import express from 'express'
import Joi from 'joi'
import expressJoi from 'express-joi-validation'

const Validator =  expressJoi.createValidator({})
const router = express.Router()

//渲染login page
router.get('/login', (req, res) => {
    res.render('login.html')
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