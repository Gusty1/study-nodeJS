/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-12 23:40:54
 * @LastEditTime: 2024-10-13 00:09:42
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\1-writeFile.js
 * @Description:
 */
/**
 * 需求:
 * 新建一個文件，測試txt，寫入內容
 */

//1. 導入fs模塊
const fs = require('fs')

//2. 寫入文件(異步)
//回調函數寫入完成後會自動調用，並把錯誤傳入函數
// fs.writeFile('./測試.txt', 'Hello World', err => {
//     // 若寫入失敗，err就是錯誤對象
//     // 若寫如成功err會是null
//     if (err) {
//         console.log('寫入失敗')
//         return
//     } else {
//         console.log('寫入成功')
//         return
//     }
// })
// console.log(1 + 1)

//3. 同步寫入(沒有回調函數)
fs.writeFileSync('./測試同步.txt', 'Hello World Sync')