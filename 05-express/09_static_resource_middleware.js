/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 15:29:54
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

// 導入express
const express = require('express')

// 創建應用對象
const app = express()

//靜態資源中間件的設置
//()裡面的就是你的靜態資源資料夾，可以之直接用url請求文件內容
//例: http://127.0.0.1:9000/test.html
app.use(express.static(__dirname+'/resources'))

// 創建路由
app.get('/home', (req, res) => {

    res.send('hello express')
})

// 監聽端口
app.listen(9000, () => {
    console.log('服務已啟動，端口正在監聽...')
})