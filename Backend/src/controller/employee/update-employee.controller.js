const employeeModel = require('../../models/employee');
const log = require('lambda-log');
const updateEmployee = async (req, res, next) => {
    data = req.user;
    log.info("Updating employee details", { "employeeId": data._id, "firstName": data.firstName, "file": "update-employee.controller.js", "method": "updateEmployee" });
    try {
        const response = await employeeModel.updateOne({ _id: req.body._id }, {
            $set: {
                ...req.body
            },
        });
        log.info("Employee details successfully Updated", { "employeeId": data._id, "firstName": data.firstName, "file": "update-employee.controller.js", "method": "updateEmployee" });
        if (response){
            return res.status(200).send({ message: "Employee Updated Successfully" });
        }else
        {
            return res.status(400).send({message:"Unable to update Employee Details"});
        }
    } catch (err) {
        log.error(err, "Error Occured while Updating Employee");
        let error = new Error(`Error Occured while Updating Employee${err.message}`)
        error.statusCode = 400;
        next(error);
    }
}

module.exports = updateEmployee;