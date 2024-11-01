/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 00:24:36
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

// 導入express
const express = require('express')

// 創建應用對象
const app = express()

// 創建路由
app.get('/request', (req, res) => {

    //原生操作
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req.httpVersion)
    // console.log(req.headers)

    //express操作
    console.log(req.path)
    console.log(req.query)

    //獲取IP
    console.log(req.ip)

    //獲取請求頭
    console.log(req.get('host'))
    
    res.end('Hello Express')
})

// 監聽端口
app.listen(9000,()=>{
    console.log('服務已啟動，端口正在監聽...')
})