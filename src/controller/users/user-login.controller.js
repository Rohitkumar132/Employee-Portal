const log = require('lambda-log');
const UserModel = require('./../../Models/user');
const employeeModel = require('../../models/employee')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userLogin = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        const user = await employeeModel.findOne({username:data.username});
        if(!user)
            return res.status(404).send({message: "User not Register"});

        console.log(user)
        console.log(data.password , user.passwordHash)
        const validPassword = await bcrypt.compare(data.password, user.password)
        console.log(validPassword)
            // const token = jwt.sign(data._id, process.env.SALT);
        if(!validPassword)
            return res.status(400).send({message:"Incorrect Password"})
        
        const id = user._id
        const token = jwt.sign(id,process.env.JWTPRIVATEKEY , {expiresIn: "8h"} )

        await new UserModel({token:token, email: user.email, password: user.passwordHash, user_id: user._id }).save();
        log.info("User login Successfully", { "employeeId": data._id, "firstName": data.firstName, "file": "user-login.controller.js", "method": "userLogin" });
        res.status(200).send({message:"User Login Successfully", "token" : token});
    } catch (err) {
        console.log(err, "ErrorLog::");
        let error = new Error("Unable to retrieve employees list");
        error.statusCode = 400;
        next(error);
    }
}

module.exports = userLogin;