/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 00:09:14
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

// 導入express
const express = require('express')

// 創建應用對象
const app = express()

// 創建路由
app.get('/home', (req, res) => {
    res.end('Hello Express')
})

//初次載入會進來這裡(預設首頁)
app.get('/',(req,res)=>{
    res.end('get home')
})
app.post('/',(req,res)=>{
    res.end('post home')
})

//匹配所有請求方法
app.all('/test',(req,res)=>{
    res.end('all home')
})

//404響應
app.all('*',(req,res)=>{
    res.end('404')
})

// 監聽端口
app.listen(9000,()=>{
    console.log('服務已啟動，端口正在監聽...')
})