<!--
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-09 16:44:00
 * @LastEditTime: 2024-11-02 22:31:57
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\lecture\00_我的GGYY.md
 * @Description: 上課遇到需要對我來說要特別注意的點，紀錄一下
-->

# 我的 GGYY

---

## LTS 的版本

一開始我是裝最新版的，不是穩定版，然後教學使用的檔名都是中文的，我也跟者用中文檔名，但 run 的時候會出錯，明明程式沒寫錯，但是就是 run 不起來，後來檔名改回英文就都正常了。

前期學的時候穩定版是 20，我用中文檔名還以 run，學到一半的時候穩定版變成 22，然後我更新了，檔名問題又出現了，所以就又變回英文檔名了。

## require 和 import

這 2 個方法都是用來導入包的，根據 gpt 的說法，官方已經推薦使用 import 語法，但比較舊的專案還是使用 require，像是`express-generator`產生出來的就只能用 require ，用 import 會報錯。

> 從 Node.js 14 版本開始，ECMAScript Modules (ESM) 的 import 和 export 語法已經變得更為常用，並且在最新的 Node.js 版本中成為推薦的模組系統。相較於 CommonJS 的 require 和 module.exports，import 更符合現代 JavaScript 的標準，並且在前後端的 JavaScript 一致性方面也有幫助。

## formidable

[官網](https://www.npmjs.com/package/formidable '官網')
主要是用作上傳理案的方便工具，影片使用版本較舊照影片寫的會出錯，所以特別紀錄一下新寫法。(真的挺方便的)

```javascript
//記得先導入formidable包

//創建form對象
const form = new formidable.IncomingForm({
    //設置上傳文件的保存目錄
    uploadDir: __dirname + '/../public/images',
    //保持文件後綴
    keepExtensions: true,
})

//解析請求報文
form.parse(req, (err, fields, files) => {
    if (err) {
        next(err)
        return
    }

    /*
    form解析完的資料很多都是用ary包裝的，像下面這樣
    {
        username:['gusty']
    }
    好像是新版本都會變這樣，影片用的還不會，所以用的時候記得印出來看一下
    */

    console.log(fields)
    console.log('=============')
    console.log(files)
    // console.log(files.portrait[0].newFilename)
    // res.json({ fields, files })
    //保存該圖片訪問的url
    const url = '/images/' + files.portrait[0].newFilename

    res.send(url)
})
```

## nestJS

**他當初就是設計給 typescript 用的，所以產生出來的都是 ts 檔案**
由於`express-generator`是比較舊的，我就去問 AI 有沒有比較新的，他推薦我這個，這個是沒有甚麼模板引擎可以用的，只能用作後端應用的，專門用來開發 restful api 。
看起來除了這個以外要用 JS 寫的 AI 還是最推薦純 express

### 使用範例

範例截自 gpt，下面是一個簡單的 NestJS 應用的安裝和使用範例。這個範例將會引導你創建一個基本的 RESTful API。

#### 1. 安裝 NestJS CLI

首先，你需要安裝 NestJS 的 CLI 工具：

```bash
npm i -g @nestjs/cli
```

#### 2. 創建新的 NestJS 應用

使用 NestJS CLI 創建一個新的應用：

```bash
nest new my-nest-app
```

這個命令會提示你選擇一個包管理器（npm 或 yarn），然後 CLI 會自動生成一個新的 NestJS 專案結構。

#### 3. 進入專案目錄

進入剛剛創建的專案目錄：

```bash
cd my-nest-app
```

#### 4. 創建一個控制器

NestJS 使用控制器來處理請求。你可以使用 CLI 創建一個新的控制器：

```bash
nest generate controller cats
```

這將會在 `src` 目錄下創建一個 `cats` 控制器的檔案 `cats.controller.ts`。

#### 5. 實作控制器

打開 `cats.controller.ts`，並添加一些基本的路由：

```typescript
import { Controller, Get, Post, Body } from '@nestjs/common'

@Controller('cats')
export class CatsController {
    private cats = []

    @Post()
    create(@Body() cat: { name: string; age: number }) {
        this.cats.push(cat)
        return cat
    }

    @Get()
    findAll() {
        return this.cats
    }
}
```

這個控制器提供了兩個路由：

- `POST /cats`：用於創建新的貓。
- `GET /cats`：用於獲取所有貓的列表。

#### 6. 更新應用模組

確保將新的控制器添加到應用模組中，打開 `app.module.ts`，並導入 `CatsController`：

```typescript
import { Module } from '@nestjs/common'
import { CatsController } from './cats/cats.controller'

@Module({
    imports: [],
    controllers: [CatsController],
    providers: [],
})
export class AppModule {}
```

#### 7. 啟動應用

現在你可以啟動 NestJS 應用：

```bash####
npm run start
```

NestJS 默認在 `http://localhost:3000` 上運行。

#### 8. 測試 API

使用 Postman 或 curl 測試 API。

- **創建新的貓**：

```bash
curl -X POST http://localhost:3000/cats -H "Content-Type: application/json" -d '{"name": "Tom", "age": 3}'
```

- **獲取所有貓**：
  
```bash
curl http://localhost:3000/cats
```

## mongoDB
