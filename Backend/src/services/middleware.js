const jwt = require('jsonwebtoken');
const UserModel = require('../Models/user');
const middleware = async (req, res, next) => {

    try {
        const token = req.headers['authorization'];
        const userId = jwt.decode(token.split(" ")[1]);
        const tokenAgeInHours = (Date.now() / 1000 - userId.iat) / 3600;
        if (tokenAgeInHours > 8) {
            return res.status(401).send({ message: "Token Expired, please re-login" });
        }
        const user = await UserModel.findOne({ user_id: userId?.id });
        if (!user || user == null)
            return res.status(401).send({ message: "User not Valid" })
        req.user = user
        next();
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: 'Internal Server Error' })
    }
}

module.exports = middleware;