/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 12:02:26
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

// 導入express
const express = require('express')

// 創建應用對象
const app = express()

// 創建路由
app.get('/other', (req, res) => {
    
    //跳轉響應
    // res.redirect('https://www.youtube.com/')

    //下載響應
    // res.download(__dirname+'/resources/NEWS-tick-tock.mp3')

    //jon響應
    // res.json({
    //     name:'gusty',
    //     age:'123',
    //     slogan:'take off toward a dream'
    // })

    //響應文件內容
    res.sendFile(__dirname+'/resources/test.html')
    
})

// 監聽端口
app.listen(9000,()=>{
    console.log('服務已啟動，端口正在監聽...')
})