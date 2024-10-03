const log = require('lambda-log');
const UserModel = require('./../../Models/user');
const employeeModel = require('../../models/employee')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userLogin = async (req, res, next) => {
    try {
        const data = req.body;
        // console.log(data);
        const user = await employeeModel.findOne({ username: data.username });
        if (!user)
            return res.status(404).send({ message: "User not Register" });

        const validPassword = await bcrypt.compare(data.password, user.passwordHash).then((result) => {
            return result
        }).catch((err) => {
            console.error(err);
        });

        // const token = jwt.sign(data._id, process.env.SALT);
        if (!validPassword)
            return res.status(400).send({ message: "Incorrect Password" })

        const id = user._id
        const token = jwt.sign({ id: user._id }, process.env.JWTPRIVATEKEY, { expiresIn: "8h" })
        const filter = { email: user.email };
        const update = {
            $set: {
                token: token,
                role: user.role,
                user_id: user._id
            }
        }
        const options = { upsert: true }
        try {
            await UserModel.updateOne(filter, update, options);
            const UserDetails = await UserModel.findOne({ user_id:id })
            log.info("User login Successfully", { "employeeId": user._id, "firstName": user.firstName, "file": "user-login.controller.js", "method": "userLogin" });
            return res.status(200).send({ message: "User Login Successfully", UserDetails });
            // await UserDetails.save();
        } catch (err) {
            console.log(err, "ErrorLog::");
            let error = new Error("Unable to retrieve employees list");
            error.statusCode = 400;
            next(error);
        }
    } catch (err) {
        console.log(err, "ErrorLog::");
        let error = new Error("Unable to retrieve employees list");
        error.statusCode = 400;
        next(error);
    }
}

module.exports = userLogin;