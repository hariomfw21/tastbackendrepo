const express = require("express");
const { connection } = require("./connection/connection");
const { create } = require("./createRoute/create");
const { authencation } = require("./middlewere/authencation");
const { login } = require("./userRoute/login");
const { register } = require("./userRoute/register");
require('dotenv').config();


const app = express();

app.use(express.json());
app.use("/",register);
app.use("/",login);
app.use(authencation);
app.use("/user",create)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`connected to ${process.env.port}`);
    }catch(err){
        console.log(err);
    }
})