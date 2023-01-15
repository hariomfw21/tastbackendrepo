const express = require("express");
const { UserModel } = require("../schema/userSchema");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
require('dotenv').config();


const login = express.Router();

login.post("/login",async(req,res)=>{
    const {email,pass} = req.body;
    let data = await UserModel.find({email});

    if(data.length>0){
        bcrypt.compare(pass, data[0].pass, (err, result)=> {
            if(result){
                var token = jwt.sign({userId:data[0]._id}, process.env.token);
                res.send({login:"sucessfull",token});
            }
        });
    }

    

})


module.exports={
    login
}