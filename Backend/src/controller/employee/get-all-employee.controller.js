const employeeModel = require('../../models/employee');
const log = require('lambda-log');

const getAllEmployees = async (req, res, next) => {
    // const data = req.user;
    // log.info("Fetching Employee List", { "employeeId": data._id, "firstName": data.firstName, "file": "get-all-Employee.controller.js", "method": "getAllEmployee" });
    try {
        // let empData;
        let data = await employeeModel.find();
        // if(data.role === 'superadmin'){
        //     empData = await employeeModel.find({}, 
        //         "firstName lastName username role active profileImage reportStats leaving_date joining_date shift terminate_reason hasPolicyAccepted  itPolicyAcceptance biometric_id employee_category phoneNumber opfin_id official_email dob allocated_under.TeamLeadName appraisal_month weekly_off face_auth"
        //     );
        // }
        // if(data.role === 'teamleader'){
        //     empData = await employeeModel.find({
        //         _id:{$ne : data._id}, role: {$nin :["superadmin"]}
        //     }, 
        //         "firstName lastName username role active profileImage reportStats leaving_date joining_date shift terminate_reason hasPolicyAccepted  itPolicyAcceptance biometric_id employee_category phoneNumber opfin_id official_email dob allocated_under.TeamLeadName appraisal_month weekly_off face_auth"
        //     );
        // }
        // if(data.role === 'employee'){
        //     empData = await employeeModel.find({
        //         _id:{$ne : data._id}, role: {$nin :["superadmin", "teamleader", "System Support"]}
        //     }, 
        //         "firstName lastName role joining_date shift"
        //     );
        // }

        // log.info("Employee List Fetched Successfully", { "employeeId": data._id, "firstName": data.firstName, "file": "get-all-Employee.controller.js", "method": "getAllEmployee" });
        return res.status(200).send({ message: "Employees data Fetched Successfully", data })
    } catch (err) {
        log.error(err, "Error Occured while Fetching employees from DB");
        let error = new Error(`Error Occured While Fetcching Employees - ${err.message}`);
        error.statusCode = 400;
        next(error);
    }
};

module.exports = getAllEmployees;