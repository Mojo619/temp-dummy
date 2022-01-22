const express = require('express');
const path = require('path')
 const app = express();

app.use(express.static('./public'))


//app.get('/',(req,res)=>{
//res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
//})

app.all('*',(req,res)=>{
    req.status(404).send('Resource not Found')
})

 app.listen((5000),()=>{
console.log('server is listening on port 5000...')
 })