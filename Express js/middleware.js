const express = require('express')
 const app = express()
 const morgan = require('morgan')
const authorize = require('./authorize')
 const logger = require('./logger')

//req => middleware => res

//app.use([logger,authorize])
app.use(morgan('tiny'))
app.get('/',(req,res)=>{
    res.send("Home")
})
app.get('/about',(req,res)=>{
    res.send("about")
})
app.get('/api/products',(req,res)=>{
    res.send("Products")
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send("ITEMS")
})












app.listen(5000,()=>{
     console.log('server is listening on port 5000....')
 })