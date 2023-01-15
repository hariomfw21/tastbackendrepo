const express = require("express");
const { CreateModel } = require("../schema/createSchema");
const { UserModel } = require("../schema/userSchema");

const create = express.Router();

create.get("/getuser",async(req,res)=>{
    res.send(await CreateModel.find())
})

create.post("/create", async (req, res) => {
    const paylode = req.body
    try {
        const data = new CreateModel(paylode);
        await data.save();
        res.send(await CreateModel.find());
    } catch (Err) {
        console.log(Err);
    }

})

create.patch("/update/:ID", async (req, res) => {
    const ID = req.params.ID;
    const paylode = req.body;
    const createId = await CreateModel.findOne({_id:ID});
    const notesuserid = createId.userId;
    const myuserid = req.body.userId;
    if(notesuserid==myuserid){
        try {
            await CreateModel.findByIdAndUpdate(ID, paylode);
            res.send("Notes has been Updatad");
        } catch (Err) {
            console.log(Err);
        }
    }else{
        res.send("something went wrong");
    }
    

})

create.delete("/delete/:ID",async(req,res)=>{
 const ID = req.params.ID;
 const data = await CreateModel.findOne({_id:ID});
 const notesid = data.userId;
 const myuserID = req.body.userId;
 if(notesid==myuserID){
    try{
        await CreateModel.findByIdAndDelete(ID);
        res.send(await CreateModel.find());
      }catch(Err){
        console.log(Err)
      }
 }else{
   res.send({err:"Something went Wrong"});
 }
  
})

module.exports = {
    create
}