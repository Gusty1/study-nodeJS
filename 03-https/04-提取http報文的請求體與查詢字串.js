/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-22 17:28:08
 * @LastEditTime: 2024-10-28 23:14:19
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\03-https\04-提取http報文的請求體與查詢字串.js
 * @Description: 
 */
//導入https模塊
const http = require('http')
//導入url模塊
const url = require('url')

//範例網址: http://127.0.0.1:9000/search?keyword=h5
//創建服務對象，接收一個函數參數(request,response)=>{}
const server = http.createServer((request, response) => {
    //解析request.url
    // console.log(request.url)
    let res = url.parse(request.url,true)
    // console.log(res)

    //路徑
    let pathname = res.pathname
    console.log(pathname)

    //查詢字符串
    let keyword = res.query.keyword
    console.log(keyword)

    response.end('url')
})

//監聽端口，啟動服務(端口號,回調函數)
server.listen(9000, () => {
    //啟動成功時執行
    console.log('服務已經啟動...')
})