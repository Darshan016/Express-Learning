const express = require('express')
const app = express()

const port = 3000

app.get('/', (req,res)=>{
    res.send('Home Page.')
})

app.get('/github',(req,res)=>{
    res.send(`darshan's github`)
})

app.listen(port,()=>{
    console.log(`listening on port${port}`)
})