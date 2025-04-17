const route=require('./routes/userRoutes.js')
const bodyParser=require('body-parser');
const dotenv=require('dotenv');

const express=require('express');
const mongoose=require('mongoose');
const app=express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT||8000;
const URL = process.env.MONGO_URL;
mongoose.connect(URL).then(()=>{
    console.log("database connected")
    app.listen(PORT,()=>{
        console.log("running....")
    })
}).catch((error)=>{
    console.log(error)
})

app.use("/api/user", route);
