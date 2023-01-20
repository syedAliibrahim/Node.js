const express = require('express');
const app = express();
app.get('',(req,res)=>{
    res.send('hello, thissss is home page')
})
app.get('/about',(req,res)=>{
    res.send('hello, thissss is about page')
})
app.get('/c',(req,res)=>{
    res.send('hello, thissss is cccccccccccccc')
})
app.listen(4500)