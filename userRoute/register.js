const express = require("express");
const { UserModel } = require("../schema/userSchema");
const bcrypt = require('bcrypt');

const register = express.Router();

register.post("/register",async(req,res)=>{
    const {name,email,pass} = req.body;
    bcrypt.hash(pass, 5, async(err, hash)=> {
        if(err){
            console.log(err)
        }else{
            const data = new UserModel({name,email,pass:hash});
            await data.save()
            res.send("registration Sucessfull");
            console.log(await UserModel.find());
        }
    });

    
})


module.exports={
    register
}