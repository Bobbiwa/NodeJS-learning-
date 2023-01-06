const express = require('express')
const usersCRUD = require('./utils/userCRUD')

const router = express.Router()

//查询所有用户
router.get('/findAll', (req, res) => {
    usersCRUD.findAll((err,data)=>{
        if(err) res.send(err)
        res.send(data)
    })
})

//根据id查询用户
router.get('/findById', (req, res) => {
    const { id } = req.query
    usersCRUD.findById(id, (err, data) => {
        if (err) res.send(err)
        res.send(data)
    })
})

//创建用户
router.post('/create', (req, res) => {
    usersCRUD.save(req.body, (err) => {
        if (err) res.send(err)
    })
})

//根据id更新用户
router.post('/update', (req, res) => {
    usersCRUD.updateById(req.body, (err) => {
        if (err) res.send(err)
    })
})

//根据id删除用户
router.delete('/delete', (req, res) => {
    usersCRUD.delete(req.body, (err) => {
        if (err) res.send(err)
    })
})

module.exports = router