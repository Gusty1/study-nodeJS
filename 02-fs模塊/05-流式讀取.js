/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-20 22:03:32
 * @LastEditTime: 2024-10-20 22:11:10
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\5-流式讀取.js
 * @Description: 
 */
//1. 引入fs模塊
const fs = require('fs')

//2. 創建讀取流對象
const rs = fs.createReadStream('./ReGLOSS-フィーリングラデーション.mp4')

//3. 綁定data事件
rs.on('data', chunk => {
    console.log(chunk.length)//65536字節=>64KB
})

//4. end 讀取完成(可選事件)
rs.on('end', () => {
    console.log('讀取完成')
})