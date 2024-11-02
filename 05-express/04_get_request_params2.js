/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 00:33:27
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

// 導入express
const express = require('express')

// 創建應用對象
const app = express()

// 創建路由
app.get('/:id.html', (req, res) => {
    
    //獲取url路由參數
    console.log(req.params.id)

    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('商品詳情')
})

// 監聽端口
app.listen(9000,()=>{
    console.log('服務已啟動，端口正在監聽...')
})