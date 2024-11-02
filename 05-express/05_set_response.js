/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 11:41:05
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

// 導入express
const express = require('express')

// 創建應用對象
const app = express()

// 創建路由
app.get('/response', (req, res) => {
    
    //原生響應
    // res.statusCode=404
    // res.statusMessage='oooook'
    // res.setHeader('xxx','yyy')
    // res.write('hello response')
    // res.end('response')

    //express響應
    // res.status(500)
    // res.set('aaa','bbb')
    // res.send('你好 Express')

    res.status(500).set('aaa','bbb').send('可以這樣寫')
})

// 監聽端口
app.listen(9000,()=>{
    console.log('服務已啟動，端口正在監聽...')
})