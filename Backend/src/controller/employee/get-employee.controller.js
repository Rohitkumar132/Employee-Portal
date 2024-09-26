const employeeModel = require("../../models/employee");
const log = require('lambda-log');

const getEmployee = async(req,res,next)=>{
    const data = req.user;
    log.info("Fetching Employee", {"employeeId": data._id, "firstName" : data.firstName , "file" : "get-employee.controller.js" ,"method": "getEmployees" });
    try {
        const employee = await employeeModel.findOne(data._id);
        return res.status(200).send({message: "Employee Fetched Successfully",employee})
    } catch (err) {
        log.error(err, "Error occurred while fetching employee from DB");
                let error = new Error(`Error occurred while fetching employee - ${err.message}`);
                error.statusCode = 400;
                next(error);
    }
};

module.exports = getEmployee;