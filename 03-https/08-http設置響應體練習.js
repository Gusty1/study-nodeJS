/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-29 21:44:33
 * @LastEditTime: 2024-10-29 22:12:28
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\03-https\08-http設置響應體練習.js
 * @Description: 
 */

/**
 * 練習:
 * 就響應回一個table，就一堆html字串，懶得寫了
 */

// 導入http模塊
const http = require('http')

//創建服務對象
const server = http.createServer((request, response) => {
    response.end(`
        <!DOCTYPE html>
        <html lang="zh-TW">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>aaaaaaaaa</h1>
        </body>
        </html>
    `)
})

//監聽端口，啟動服務
server.listen(9000, () => {
    console.log('服務已啟動...')
})