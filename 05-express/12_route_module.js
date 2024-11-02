/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-02 16:19:22
 * @LastEditTime: 2024-11-02 16:24:49
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 有需要請描述一下
 */
// 導入express
const express = require('express')
const homeRouter = require('./12-1_home_router')

// 創建應用對象
const app = express()

//設置
app.use(homeRouter)

app.get('/setting', (req, res) => {
    res.send('設置首頁')
})

app.get('*', (req, res) => {
    res.send('<h1>404 not found</h1>')
})

// 監聽端口
app.listen(9000, () => {
    console.log('服務已啟動，端口正在監聽...')
})