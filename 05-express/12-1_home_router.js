/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 16:23:21
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

//1. 導入express
const express = require('express')

//2. 創建路由對象
const router = express.Router()

//3. 創建路由規則
router.get('/home', (req, res) => {
    res.send('前台首頁')
})

router.get('/admin', (req, res) => {
    res.send('後台首頁')
})

//4. 暴露router
module.exports = router