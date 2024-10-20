/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-20 23:21:33
 * @LastEditTime: 2024-10-20 23:42:41
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\12-批量重命名.js
 * @Description: 
 */
const fs = require('fs')

//讀取文件夾
const files = fs.readdirSync('../02-fs模塊')

// console.log(files)
//遍歷
files.forEach(item => {
    // console.log(item)
    //判斷
    let [num, name] = item.split('-')
    console.log(num)
    console.log(name)
    if (name && Number(num) < 10) {
        num = '0' + num
    }
    let newName = num + '-' + name
    // console.log(newName)
    if (name) {
        fs.renameSync(`../02-fs模塊/${item}`, `../02-fs模塊/${newName}`)
    }
})