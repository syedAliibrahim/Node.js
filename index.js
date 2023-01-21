// const app= require('./app')
// console.log(app.z())

// const arr=[4,5,8,7,3,3,5,55,27,9,34,4,8,9,,1,2,3,];
// let arrs=arr.filter((i)=>{
//     return i ===3
// })
// console.log(arrs)
// const fs =require('fs');
// fs.writeFileSync("ggggggg.js","aaaaaaaadddddddddddddddrrrr")
// const http =require('http');

// http.createServer((req,resp)=>{
//     resp.write("<h1>sf dgg fafjuhuhujhhaf af</h1>");
//     resp.end();
// }).listen(4500);
// var colors = require('colors');
// console.log("package".green)


//////////////////////API

// const http =require('http');
// const data = require('./data');
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type':'app\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();

// }).listen(5000)


// const fs =require('fs');
// const path =require('path');
// const dirPath=path.join(__dirname,'files');
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync("dirPath+"/helllo "+i+".txt","a dadd ff ");
// }
// fs.readdir(dirPath,(err,files)=>{

// })


// const fs=require('fs');
// const path = require('path')
// const dirPath= path.join(__dirname,'crud');
// const filePath= `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'this is a simple');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("updated")
// })
// fs.unlinkSync(`${dirPath}/apple.txt`)

app.get("/user" ,(req, resp)=>{
    resp.send("hello worldaaaaaaaapppppppppppi")
})
app.listen(PORT,()=>console.log(`server running on http://localhost:${4000}`))