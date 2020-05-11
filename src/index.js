const express = require('express')
const app = express()
const path = require('path')




app.get('/' , (req, res) =>{
  res.sendFile(path.join(__dirname + '/views' + '/index.html'));
})

app.get('/bot', (req,res)=>{
  res.sendFile(path.join(__dirname + '/views' + '/bot.html'));
})



app.listen(3333)