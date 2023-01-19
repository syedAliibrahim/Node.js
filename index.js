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

const http =require('http');
const data = require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'app\json'});
    resp.write(JSON.stringify(data));
    resp.end();

}).listen(5000)