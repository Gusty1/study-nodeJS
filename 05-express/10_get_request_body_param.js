
/*
GET /login 顯示表單網頁
POST /login 獲取表單中的用戶名和密碼
*/

//導入express
const express = require('express')
const bodyParser = require('body-parser')

//創建應用對象
const app = express()

// 解析JSON格式的請求體
const jsonParser = bodyParser.json()

// 解析queryString格式請求體的中間件
const urlencodedParser = bodyParser.urlencoded(
    { extended: false }
)

//創建路由規則
app.get('/login', (req, res) => {

    res.send('表單頁面')
})

app.post('/login', urlencodedParser, (req, res) => {
    //用postman發送請求

    //當中間件執行完畢以後會往req上加一個新的屬性body
    //獲取用戶名和密碼，需要用到一個包"body-parser"
    console.log(req.body)
    const {username,password} = req.body
    res.send(`用戶名:${username} 密碼:${password}`)
})

//啟動服務
app.listen(9000, () => {
    console.log('服務已經啟動...')
})