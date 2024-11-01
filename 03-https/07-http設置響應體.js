/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-29 21:44:33
 * @LastEditTime: 2024-10-29 22:05:25
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\03-https\07-http請求練習.js
 * @Description: 
 */


// 導入http模塊
const http = require('http')

//創建服務對象
const server = http.createServer((request, response) => {
    //1. 設置響應狀態碼(2XX、4XX...)
    // response.statusCode = 200
    // response.statusCode = 404

    //響應狀態的描述
    response.statusMessage='gogogogo'

    //3. 響應頭
    response.setHeader('content-type','text/html;charset=utf-8')
    response.setHeader('server','nodeJS')
    response.setHeader('myHeader','testtestest')

    //4. 響應體設置
    // response.write('today')
    // response.write('today')
    response.write('today')

    response.end('response')
})

//監聽端口，啟動服務
server.listen(9000, () => {
    console.log('服務已啟動...')
})