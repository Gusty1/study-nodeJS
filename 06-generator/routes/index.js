/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-11-02 20:46:13
 * @LastEditTime: 2024-11-02 21:40:05
 * @LastEditors: Gusty a0985209465@gmail.com
 * @Description:
 */
var express = require('express')
var router = express.Router()

//導入formidable用來處理文件上傳
import formidable from 'formidable';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' })
})


//顯示網頁
router.get('/portrait', (req, res) => {
    res.render('portrait')
})

//處理文件上傳
router.post('/portrait', (req, res) => {
    //創建form對象
    const form = new formidable.IncomingForm({
        //設置上傳文件的保存目錄
        uploadDir: __dirname + '/../public/images',
        //保持文件後綴
        keepExtensions: true
    })

    //解析請求報文
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err)
            return
        }
        console.log(fields)
        console.log('=============')
        console.log(files)
        // console.log(files.portrait[0].newFilename)
        // res.json({ fields, files })
        //保存該圖片訪問的url
        const url = '/images/' + files.portrait[0].newFilename

        res.send(url)
    })
})


module.exports = router