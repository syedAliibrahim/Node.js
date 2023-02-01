const express = require('express');
const app = express();
const PORT =5500
// app.get('',(req,res)=>{
//     res.send('hello, thissss is home page')
// })
// app.get('/about',(req,res)=>{
//     res.send('hello, thissss is about page')
// })
// app.get('/c',(req,res)=>{
//     res.send('hello, thissss is cccccccccccccc')
// })

// app.use(express.json())
// app.get("/user" ,(req, resp)=>{
//     // console.log(req)
//     resp.send("hello worldaaaaa")
// })
// app.post("/user" ,(req, resp)=>{
//     console.log(req.body)
//     resp.send("hello worlporddt")
// })


app.get("/api/user",(req,res)=>{
    res.send("user get")
})
app.post("/api/user",(req,res)=>{
    res.send("user create ")
})
app.put("/api/user",(req,res)=>{
    res.send("user update ")
})
app.delete("/api/user",(req,res)=>{
    res.send("user delete")
})
app.listen(5500)