/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 15:09:33
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

/**
 * 紀錄每個請求的url 與 IP 地址
 */

// 導入express
const express = require('express')
const fs = require('fs')
const path = require('path')

// 創建應用對象
const app = express()

//聲明中件件函數
function recordMiddleware (req, res, next) {
    //獲取url、ip
    const { url, ip } = req

    //相信息保存在文件中
    fs.appendFileSync(path.resolve(__dirname, './resources/access.log'), `${url} ${ip}\r\n`)
    
    //調用next
    next()
}

//使用中間件函數
app.use(recordMiddleware)

// 創建路由
app.get('/home', (req, res) => {

    res.send('前台首頁')
})

app.get('/admin', (req, res) => {

    res.send('後台首頁')
})

app.get('*', (req, res) => {

    res.send('<h1>404 not found</h1>')
})

// 監聽端口
app.listen(9000, () => {
    console.log('服務已啟動，端口正在監聽...')
})