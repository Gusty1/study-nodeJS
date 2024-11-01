/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-29 21:44:33
 * @LastEditTime: 2024-10-29 21:57:24
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\03-https\06-http請求練習.js
 * @Description: 
 */

/**
 * 練習:
 * 網址輸入login顯示 「登入頁面」 四個字
 * 網址輸入reg顯示 「註冊頁面」 四個字
 */

//1. 導入http模塊
const http = require('http')

//2. 創建服務對象
const server = http.createServer((request, response) => {
    //獲取請求的方法
    let { method } = request

    //獲取請求的url路徑
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    // console.log(method)
    // console.log(pathname)

    response.setHeader('content-type','text/html;charset=utf-8')
    //判斷
    if (method === 'GET' && pathname === '/login') {
        response.end('登入頁面')
    } else if (method === 'GET' && pathname === '/reg') {
        response.end('註冊頁面')
    }else{
        response.end('404 not found')
    }

})

//3. 監聽端口，啟動服務
server.listen(9000, () => {
    console.log('服務已啟動...')
})