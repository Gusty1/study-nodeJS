/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-20 22:32:19
 * @LastEditTime: 2024-10-20 22:32:40
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\6-文件複製.js
 * @Description:
 */
const fs = require('fs')
const process = require('process')

// 方式1: readFile
//讀取文件內容
// let data = fs.readFileSync('./ReGLOSS-フィーリングラデーション.mp4')
// //寫入文件
// fs.writeFileSync('./ReGLOSS複製1.mp4', data)
// console.log(process.memoryUsage())//看rss就好 43601920 = 41MB

// 方式2: 流式操作(效能較好)
//創建讀取流對象
const rs = fs.createReadStream('./ReGLOSS-フィーリングラデーション.mp4')
//創建寫入流對象
const ws = fs.createWriteStream('./ReGLOSS複製2.mp4')

//綁定data事件
// rs.on('data', chunk => {
//     ws.write(chunk)
// })
// rs.on('end', () => {
//     console.log(process.memoryUsage())//看rss就好 40300544 = 38MB
// })

// 第2種方法可以縮寫如下
rs.pipe(ws)








