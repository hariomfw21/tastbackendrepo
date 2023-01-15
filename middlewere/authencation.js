var jwt = require('jsonwebtoken');
require('dotenv').config();


const authencation = (req,res,next)=>{
    const verifytoken = req.headers.authorization;
    if(verifytoken){
        const decoded = jwt.verify(verifytoken,process.env.token)
        if(decoded==false){
            res.send("Something went Wrong");
        }else{
            const userId = decoded.userId;
            req.body.userId = userId;
            next();
        }
    }else{
        res.send("Token must be provided");
    }
    
}


module.exports={
    authencation
}

// 63c440e598fc940179c8cb6a

// 63c43f94aec63ab60c19269c