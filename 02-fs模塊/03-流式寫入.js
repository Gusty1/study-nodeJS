/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-13 00:20:14
 * @LastEditTime: 2024-10-13 00:23:30
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\3-劉式寫入.js
 * @Description: 
 */
//1. 導入fs
const fs = require('fs')

//2. 創建寫入流對象
const ws = fs.createWriteStream('./流測試.txt')

//3. write
ws.write('今天\r\n')
ws.write('明天\r\n')
ws.write('昨天\r\n')

//4. 關閉通道
ws.close()