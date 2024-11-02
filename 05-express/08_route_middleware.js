/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 15:23:11
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

/**
 * 針對/admin、/setting的請求，要求url攜帶code=521參數，
 * 未攜帶顯示暗號錯誤
 */

// 導入express
const express = require('express')
const fs = require('fs')
const path = require('path')

// 創建應用對象
const app = express()

//聲明中間件
const checkCodeMiddleWare = (req, res, next) => {
    //param是專門獲取路由參數的
    // console.log(req.params)

    //判斷url中是否code = 521
    if (req.query.code === '521') {
        next()
    } else {
        res.send('暗號錯誤')
    }
}

// 創建路由
app.get('/home', (req, res) => {

    res.send('前台首頁')
})

app.get('/admin',checkCodeMiddleWare, (req, res) => {

    res.send('後台首頁')
})

app.get('/setting',checkCodeMiddleWare, (req, res) => {

    res.send('設置首頁')
})

app.get('*', (req, res) => {

    res.send('<h1>404 not found</h1>')
})

// 監聽端口
app.listen(9000, () => {
    console.log('服務已啟動，端口正在監聽...')
})