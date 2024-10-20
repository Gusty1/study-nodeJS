/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-20 22:32:19
 * @LastEditTime: 2024-10-20 22:40:40
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\7-檔案重命名與移動.js
 * @Description:
 */
//1. 導入fs模塊
const fs = require('fs')

//2. 調用rename方法
// fs.rename('./測試.txt', './重命名測試.txt', err => {
//     if (err) {
//         console.log('寫入失敗')
//         return
//     }
//     console.log('寫入成功')
// })

// 文件的移動
fs.rename('./測試.txt', './data/重命名測試.txt', err => {
    if (err) {
        console.log('寫入失敗')
        return
    }
    console.log('寫入成功')
})
