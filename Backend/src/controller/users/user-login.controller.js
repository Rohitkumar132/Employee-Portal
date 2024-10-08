const response = require('../../common/responseHandler');
const employeeModel = require('../../models/employee');
const UserModel = require('./../../Models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await employeeModel.findOne({ username });
        if (!user) {
            return response(res, false, "User not registered", null, 401);
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) {
            return response(res, false, "Invalid password or email", null, 401);
        }

        const token = jwt.sign({ id: user._id }, process.env.JWTPRIVATEKEY, { expiresIn: "8h" });

        await UserModel.updateOne(
            { email: user.email },
            {
                $set: {
                    token,
                    role: user.role,
                    user_id: user._id
                }
            },
            { upsert: true }
        );

        const userDetails = await UserModel.findOne({ user_id: user._id }).select('email token role -_id');

        return response(res, true, "User login successful", userDetails);

    } catch (error) {
        return response(res, false, "Internal server error", null, 500, error.message);
    }
};


module.exports = userLogin;