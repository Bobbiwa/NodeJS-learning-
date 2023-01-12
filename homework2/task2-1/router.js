import express from 'express'
import usersCRUD from './utils/userCRUD'

const router = express.Router()

//查询所有用户
router.get('/user', (req, res) => {
    usersCRUD.findAll((err, data) => {
        if (err) res.send(err)
        res.send(data)
    })
})

//根据id查询用户
router.get('/user/:id', (req, res) => {
    const { id } = req.params
    usersCRUD.findById(id, (err, data) => {
        if (err) res.send(err)
        res.send(data)
    })
})

//创建用户
router.post('/user', (req, res) => {
    usersCRUD.save(req.body, (err) => {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: "OK" })
        }
    })
})

//根据id更新用户
router.put('/user', (req, res) => {
    usersCRUD.updateById(req.body, (err) => {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: "OK" })
        }
    })
})

//根据id删除用户
router.delete('/user', (req, res) => {
    usersCRUD.delete(req.body, (err) => {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: "OK" })
        }
    })
})

module.exports = router