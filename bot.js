const axios = require('axios')
const formData = require('form-data')
const token = process.env.TOKEN_BOT
const url_bot = 'https://api.telegram.org/bot'+token

startCommand = (message)=>{
    let form = formData()
    let id = message.from.id
    let username = message.from.username
    let text = 
`Hi <a href="tg://user?id=${id}">@${username}</a>, my name is secureStalk.
I can help you in finding person in social media without he/she knows about you. Right now i only support Twitter.

You can use me by sending these commands:
1. <a href="tg://bot_commands?command=search">/search</a> - find a person in social media`
    form.append('chat_id', message.chat.id)
    form.append('text', text)
    form.append('parse_mode','HTML')
    console.log(text)
    axios.post(url_bot + '/sendMessage', form, { headers: form.getHeaders() })
    .then(resp => console.log(resp))
    .catch(er => console.log(er))
    
}

searchCommand = ()=>{
    
}

helpCommand = ()=>{

}
module.exports = {
    startCommand: startCommand,
    searchCommand: searchCommand
}