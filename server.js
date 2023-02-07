const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
const app = express()
const { corsOptions } = require('./utlis/cors')
const { serverInfo } = require('./global/config')
const { defaultMongoDBConnection } = require('./utlis/db/mongoose/mongooseConnection')
const { signalMongoDBConnection } = require('./utlis/db/mongoose/mongooseConnection')

const { userModel } = require('./utlis/db/mongoose/models/user')
// 解决跨域
app.use(cors(corsOptions))

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 连接数据库
defaultMongoDBConnection()

app.get('/', (req, res) => {
    res.end('hello world')
})

// 开启请求监听
app.listen(serverInfo.port, () => {
    console.log('server running at ' + serverInfo.port)
})


