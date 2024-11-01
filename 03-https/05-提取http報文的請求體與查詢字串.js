/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-22 17:28:08
 * @LastEditTime: 2024-10-28 23:31:31
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\03-https\05-提取http報文的請求體與查詢字串.js
 * @Description: 
 */
//導入https模塊
const http = require('http')

//範例網址http://127.0.0.1:9000/search?keyword=h5
//創建服務對象，接收一個函數參數(request,response)=>{}
const server = http.createServer((request, response) => {
    //實例化URL對象
    let url = new URL(request.url,'http://127.0.0.1:9000')
    
    //輸出路徑
    console.log(url.pathname)

    //輸出keyword查詢字符串
    console.log(url.searchParams.get('keyword'))
    
    response.end('url new')
})

//監聽端口，啟動服務(端口號,回調函數)
server.listen(9000, () => {
    //啟動成功時執行
    console.log('服務已經啟動...')
})