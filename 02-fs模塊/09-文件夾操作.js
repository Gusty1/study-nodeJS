/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-20 22:46:14
 * @LastEditTime: 2024-10-20 22:55:36
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\9-文件夾操作.js
 * @Description: 有需要請描述一下
 */

const fs = require('fs')

//1. 創建文件夾
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('創建失敗')
//         return
//     }
//     console.log('創建成功')
// })

//1-2. 遞歸創建
fs.mkdir('./a/b/c', { recursive: true }, err => {
    if (err) {
        console.log('創建失敗')
        return
    }
    console.log('創建成功')
})

//2. 讀取文件夾
// fs.readdir('./data', (err, data) => {
//     if (err) {
//         console.log('讀取失敗')
//         return
//     }
//     console.log('讀取成功')
//     console.log(data)//是一個arr，顯示名稱列表
// })

//3. 刪除文件夾
// fs.rmdir('./html', err => {
//     if (err) {
//         console.log('刪除失敗')
//         return
//     }
//     console.log('刪除成功')
// })

//3-1. 遞歸刪除文件夾(不推薦使用)
// fs.rmdir('./a', { recursive: true }, err => {
//     if (err) {
//         console.log(err)
//         console.log('刪除失敗')
//         return
//     }
//     console.log('刪除成功')
// })

//建議使用rm刪除
fs.rm('./a', { recursive: true }, err => {
    if (err) {
        console.log(err)
        console.log('刪除失敗')
        return
    }
    console.log('刪除成功')
})