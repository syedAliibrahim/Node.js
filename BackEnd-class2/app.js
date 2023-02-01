const express =require("express");
const app = express()
const PORT =  process.env.PORT || 5000;
const mongoose = require("mongoose")
const userModel = require("./models/user");

// app.use(bd.json());
// mongoose.connect('mongodb+srv://<admin1>:<admin1>@cluster0.pyclrv7.mongodb.net/?retryWrites=true&w=majority',{
//   useCreateIndex:true,
//   useNewUrlParser:true,
//   useUnifirdTopology:true
// })

const DBURL= 
 "mongodb+srv://admin1:admin1@cluster0.pyclrv7.mongodb.net/?retryWrites=true&w=majority";
 mongoose.connect(DBURL)
.then((res) => console.log("Mongodb connectt"))
.catch((err) => console.log("DB ERROR", err))

app.use(express.json())

//single user get // 63d7a5c8cf012331d0b11e3f
app.get("/api/user/:userid", (request,response)=>{
    console.log(request.params, "params")
    
    const {userID} =request.params;

    // _id:mongoose.Types.ObjectId(userID)
    userModel.find({ last_name:"ali"} ,(error ,data)=>{
        if(error){
            response.json({
                message:`Internal error: ${error}`,
                status: false,
            });
        } else {
            console.log("data" ,data)
            response.json({
                message: "user successfully get",
                data: data,
                status: true,
            })
        }
    })

});

//User Create
app.post("/api/getuser", (request,response)=>{
    const {firstName, lastName, email, password} = request.body;

    if(!firstName || !lastName || !email || !password){
        response.json({
            message: "required fields are missing",
            status: false,
        })
        return;
    }

    const objToSend = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
    };
    userModel.create(objToSend, (error , data)=>{
        if(error){
            response.json({
                message:`Internal error: ${error}`,
                status: false,
            });
        } else {
            response.json({
                message: "user successfully create",
                data: data,
                status: true,
            })
        }
    });
});

app.put("/api/getuser", (request,response)=>{
    console.log(request.body);
    response.send("update USER");
});

app.delete("/api/getuser", (request,response)=>{
    console.log(request.body);
    response.send("delete USER");
});

app.listen(PORT , ()=>
  console.log(`server running on http://localhost:${PORT}`)
);