const express=require('express')
const app=express()
app.listen(3000)
app.get('/',(req,res)=>{
    res.send("Welcome to header page");
})
app.get('/about',(req,res)=>{
    res.send("Welcome to about page");
})
app.get('/api/about',(req,res)=>{
    res.send("Welcome to api page");
})