const response = require('../../common/responseHandler');
const employeeModel = require('../../models/employee');
const log = require('lambda-log');

const getAllEmployees = async (req, res, next) => {
    const data = req.user;

    log.info("Fetching Employee List", { "employeeId": data._id, "firstName": data.firstName, "file": "get-all-Employee.controller.js", "method": "getAllEmployee" });
    try {
        let list;
        if (data.role === 'superadmin') {
            list = await employeeModel.find({
                _id: { $ne: data.user_id }
            },
                "firstName lastName username role active profileImage reportStats leaving_date joining_date shift terminate_reason hasPolicyAccepted  itPolicyAcceptance biometric_id employee_category phoneNumber opfin_id official_email dob allocated_under.TeamLeadName appraisal_month weekly_off face_auth"
            );
        }
        if (data.role === 'teamleader') {
            list = await employeeModel.find({
                _id: { $ne: data.user_id }, role: { $nin: ["superadmin"] }
            },
                "firstName lastName username role active profileImage reportStats leaving_date joining_date shift terminate_reason hasPolicyAccepted  itPolicyAcceptance biometric_id employee_category phoneNumber opfin_id official_email dob allocated_under.TeamLeadName appraisal_month weekly_off face_auth"
            );
        }
        if (data.role === 'employee') {
            list = await employeeModel.find({
                user_id: { $ne: data.user_id }, role: { $nin: ["superadmin", "teamleader", "System Support"] }
            },
                "firstName lastName role joining_date shift"
            );
        }
        log.info("Employee List Fetched Successfully", { "employeeId": data._id, "firstName": data.firstName, "file": "get-all-Employee.controller.js", "method": "getAllEmployee" });
        // return res.status(200).send({ message: "Employees data Fetched Successfully", data: list })
        return response(res, true, "Employees data Fetched Successfully", list);
    } catch (error) {
        return response(res, false, "Internal server error", null, 500, error.message);
    }
};

module.exports = getAllEmployees;