/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 00:03:42
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

//1. 導入express
const express = require('express')

//2. 創建應用對象
const app = express()

//3. 創建路由
app.get('/home', (req, res) => {
    res.end('Hello Express')
})

//4. 監聽端口
app.listen(9000,()=>{
    console.log('服務已啟動，端口正在監聽...')
})