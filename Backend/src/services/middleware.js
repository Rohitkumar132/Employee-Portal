const jwt = require('jsonwebtoken');
const UserModel  = require('../Models/user');
const middleware = async (req, res, next) => {

    try {
        const data = req.headers['authorization'];
        // console.log(data)
        const token = data.split(" ");
        const userId = jwt.decode(token[1]);
        console.log(userId)
        const user = await UserModel.find({user_id:userId.id});
        console.log("Hello" , userId,user);
        if (!user)
            return res.status(400).send({message: "User not Valid"})
        // if(user)
        //     return res.status(400).send({message: "Token Expired Please Re-login"});
        req.user = user
        // console.log("NIce" , req.user)
        next();
    } catch (error) {
        console.log(error)
        return res.status(501).send({message: 'Internal Server Error'})
    }
}

module.exports = middleware;