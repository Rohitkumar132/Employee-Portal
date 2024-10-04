const jwt = require('jsonwebtoken');
const UserModel = require('../Models/user');
const middleware = async (req, res, next) => {

    try {
        const token = req.headers['authorization'];
        console.log(token)
        const userId = jwt.decode(token);
        console.log(userId)
        const user = await UserModel.findOne({ user_id: userId.id });
        if (!user)
            return res.status(400).send({ message: "User not Valid" })
        req.user = user
        next();
    } catch (error) {
        console.log(error)
        return res.status(501).send({ message: 'Internal Server Error' })
    }
}

module.exports = middleware;