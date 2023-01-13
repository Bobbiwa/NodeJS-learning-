const fs = require('fs')
const dbPath = './task2-1/db.json'

exports.findAll = (callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) callback(err)
        const usersArr = JSON.parse(data).users
        //过滤掉isDeleted为true的
        const ret = usersArr.filter((item) => {
            if (!item.isDeleted) return item
        })
        callback(ret)
    })
}

exports.findById = (id, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) callback(err)
        const usersArr = JSON.parse(data).users
        const ret = usersArr.find((item) => {
            return item.id === id
        })
        //判断数据的isDeleted
        if (ret.isDeleted) {
            callback(null, "数据已删除")
        } else {
            callback(null, ret)
        }
    })
}

exports.save = (addData, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) callback(err)
        const usersArr = JSON.parse(data).users
        const id = parseInt(usersArr[usersArr.length - 1].id) + 1
        addData.id = id.toString()
        usersArr.push(addData)

        const fileData = JSON.stringify({ users: usersArr })
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) callback('写入失败')
            callback(null)
        })
    })
}

exports.updateById = (body, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) callback(err)
        const usersArr = JSON.parse(data).users
        const newFileData = usersArr.map((item) => {
            if (item.id === body.id) {
                return item = body
            }
            return item
        })

        const string = JSON.stringify({ users: newFileData })
        fs.writeFile(dbPath, string, (err) => {
            if (err) callback(err)
            callback(null)
        })
    })
}

exports.delete = (body, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) callback(err)
        const usersArr = JSON.parse(data).users
        //soft delete
        const newFileData = usersArr.map((item) => {
            if (item.id === body.id) {
                return {
                    id: item.id,
                    login: item.login,
                    password: item.password,
                    age: item.age,
                    isDeleted: true
                }
            }
            return item
        })
        const string = JSON.stringify({ users: newFileData })
        fs.writeFile(dbPath, string, (err) => {
            if (err) callback(err)
            callback(null)
        })
    })
}

exports.autoSuggest = (substring, limit, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) callback(err)
        const usersArr = JSON.parse(data).users
        const ret = usersArr
            .filter((item) => item.login.toLowerCase().includes(substring) === true)
            .sort((a, b) => a.login.localeCompare(b.login))
            .splice(0, limit)
        callback(null, ret)
    })
}
