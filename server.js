const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const FormData = require('form-data')
const fs = require('fs')
require('dotenv').config()

const token = process.env.TOKEN_BOT
const url_bot = 'https://api.telegram.org/bot'+token

let app = express()
app.use(bodyParser.json())

app.get('/bot',(req,res)=>{
    let body = req.body
    console.log(body);
})

app.listen(8000)

// queryMessage = async (body)=>{
//     let result = body.result
//     let update_id = fs.readFileSync('update_id.txt','utf8',(err,data)=>{
//         let up_id = data.toString()
//         return up_id
//     })
//     console.log(update_id)
//     result.forEach(e => {
//         if(e.update_id > update_id){
//             let body = new FormData()
//             body.append('chat_id',e.message.chat.id)
//             body.append('photo',fs.createReadStream('test-image.png'))
//             const res = fetch(url_bot+'/sendPhoto',{
//                 method : 'POST',
//                 body : body,
//                 headers: body.getHeaders(),
//             })
//             update_id = e.update_id
//         }
//     });
//     fs.writeFile('update_id.txt',update_id,(er,data)=>{})
// }

// get_update = async ()=>{
//     const res = await fetch(url_bot+'/getUpdates')
//     const body = await res.json()
//     queryMessage(body)
//     get_update()
// }
// get_update()