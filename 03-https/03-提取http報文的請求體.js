/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-22 17:28:08
 * @LastEditTime: 2024-10-22 22:09:33
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\03-https\02-提取http報文.js
 * @Description: 
 */
//1. 導入https模塊
const http = require('http')

//2. 創建服務對象，接收一個函數參數(request,response)=>{}
const server = http.createServer((request, response) => {
    //1. 聲明一個變亮
    let body = ''

    //2. 綁定事件
    request.on('data', chunk => {
        body += chunk
    })

    //3. 綁定end事件
    request.on('end', () => {
        console.log(body)
        response.end('Hello')
    })
    //get請求是沒有請求體的
    
})

//3. 監聽端口，啟動服務(端口號,回調函數)
server.listen(9000, () => {
    //啟動成功時執行
    console.log('服務已經啟動...')
})