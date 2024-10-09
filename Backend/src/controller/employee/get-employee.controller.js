const response = require("../../common/responseHandler");
const employeeModel = require("../../models/employee");
const log = require('lambda-log');

const getEmployee = async (req, res, next) => {
    try {
        const employee = await employeeModel.findOne({_id: req.params.id});
        return response(res, true, "Employees data Fetched Successfully", employee);
    } catch (error) {
        return response(res, false, "Internal server error", null, 500, error.message);
    }
};

module.exports = getEmployee;