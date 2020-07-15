const express = require('express')
const bodyParser = require('body-parser')
const formData = require('form-data')
const fs = require('fs')
const axios = require('axios')
require('dotenv').config()

const token = process.env.TOKEN_BOT
const url_bot = 'https://api.telegram.org/bot'+token
var port = process.env.PORT || 3000

let app_update_id = 1
let app = express()
app.use(bodyParser.json())

app.get('/bot',(req,res)=>{
    let body = req.body
    console.log(body);
    res.send('hallo')
})
app.get('/',(req,res)=>{
    res.send('hellow')
})

sendMessage = async (message) => {
    const form = new formData()
    form.append('chat_id', message.chat.id)
    console.log(message.chat.id)
    form.append('text', 'HALOOO')
    axios.post(url_bot + '/sendMessage', form, { headers: form.getHeaders() })
        .then(resp => console.log(resp))
        .catch(er => console.log(er))
}

app.post('/bot',(req,res)=>{
    let { update_id, message } = req.body
    if (app_update_id < update_id) {
        app_update_id = update_id
        sendMessage(message)
    }
    res.send('HEllo')
})

app.listen(port)

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