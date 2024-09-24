const jwt = require('jsonwebtoken');
const UserModel = require('../Models/user');
const tokenAccessVerification = async(req,res,next)=>{
    const data = req.headers['authorization'];
    const userId = jwt.decode(data);
    try {
        const user = await UserModel.findById({userId});
        if(!user)
            return res.status(400).send({message:"User not valid"});

        req.user = userId;
        next();
    } catch (err) {
        console.log(err, "ErrorLog::");
        let error = new Error("Internal Server Error");
        error.statusCode = 400;
        next(error);
    }
};

module.exports  = tokenAccessVerification;