import express from 'express'
import usersModal from './utils/usersModal'
const router = express.Router()

//渲染Search page
router.get('/search', (req, res) => {
  res.render('search.html')
})

router.get('/auto_suggest/:loginSubstring/:limit', (req, res) => {
  const { loginSubstring, limit } = req.params
  usersCRUD.autoSuggest(loginSubstring, limit, (err, data) => {
    if (err) res.send(err)
    res.json(data);
  })
})

//查询所有用户
router.get('/user', async (req, res) => {
  const ret = await usersModal.findAll()
  res.json(ret)
})

//根据id查询用户
router.get('/user/:id', async (req, res) => {
  const { id } = req.params
  const ret = await usersModal.findOne({ where: { id } })
  res.json(ret)
})

//创建用户
router.post('/user', async (req, res) => {
  await usersModal.create(req.body)
  res.json({ message: "OK" })
})

//根据id更新用户
router.put('/user', async (req, res) => {
  const { id } = req.body
  await usersModal.update(req.body, { where: { id } })
  res.json({ message: "OK" })
})

//根据id删除用户
router.delete('/user', async (req, res) => {
  const { id } = req.body
  console.log(id);
  await usersModal.destroy({ where: { id } })
  res.json({ message: "OK" })
})

module.exports = router