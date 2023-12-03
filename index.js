const express = require('express')
require('dotenv').config()
const app = express()

const port = process.env.port

app.get('/', (req,res)=>{
    res.send('Home Page.')
})

app.get('/Hello',(req,res)=>{
    res.send(`Hello World!!`)
})

app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})