/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-22 17:28:08
 * @LastEditTime: 2024-10-22 17:41:16
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\03-https\01-創建https服務.js
 * @Description: 
 */
//1. 導入https模塊
const http = require('http')

//2. 創建服務對象，接收一個函數參數(request,response)=>{}
const server = http.createServer((request, response) => {
    //當服務接受到請求時執行
    response.end('Hello world')//設置響應體，並結束響應
})

//3. 監聽端口，啟動服務(端口號,回調函數)
server.listen(9000,()=>{
    //啟動成功時執行
    console.log('服務已經啟動...')
})