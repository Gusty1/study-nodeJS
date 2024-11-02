/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-01 23:49:20
 * @LastEditTime: 2024-11-02 16:13:55
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description: 
 */

// 導入express
const express = require('express')

// 創建應用對象
const app = express()

//靜態資源中間件的設置
app.use(express.static(__dirname+'/resources'))

/*
沒弄好，總之就是引用圖片的時候請求體會有一個referer
根據referer判斷是否是來自同意的網域就顯示，
不是的話就顯示404
*/

//聲明中間件
app.use((req,res,next)=>{
    //檢測請求頭中的referer 是否為127.0.0.1
    //獲取 referer
    const referer = req.get('referer')
    if(referer){
        //實例化
        const url = new URL(referer)
        //獲取hostname
        const hostname = url.hostname
        console.log(hostname)
        //判斷
        if(hostname !== '127.0.0.1'){
            res.status(404).send('<h1>404</h1>')
            return
        }
    }
    console.log(referer)
    
    next()
})

// 創建路由
app.get('/', (req, res) => {

    res.send(`
        <h1>測試<h1>
        <img src="./wallpaper.jpg">
    `)
})

// 監聽端口
app.listen(9000, () => {
    console.log('服務已啟動，端口正在監聽...')
})