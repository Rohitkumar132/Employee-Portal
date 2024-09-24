const employeeModel = require('../../models/employee')
const bcrypt = require("bcrypt");
const log = require("lambda-log");

const addEmployee = async (req, res, next) => {
    // let data = req.user;
    log.info("Adding employee to the DB", { "employeeId": "data._id", "firstName": "data.firstName", "file": "add-employee.controller.js", "method": "addEmployee" });
    try {
        let {
            firstName,
            lastName,
            username,
            role,
            password,
            joining_date,
            appraisal_month,
            email,
            phoneNumber,
            address,
            dob,
            aadhaar_number,
            pan_number,
            reference_by,
            perm_address,
            fatherName,
            motherName,
            weekly_off,
            allocated_under,
            shift,
            resume,
            emergency_contact,
            biometric_id,
            education,
            bank_details,
            official_email,
            employee_category,
            highest_qualification,
            id_proof,
            travel_allowance,
            pan_doc,
            employment_doc
        } = req.body;

        //checking Existing Employee in DataBase
        const existingEmployee = await employeeModel.findOne({ email: email });
        if (existingEmployee)
            return res.status(400).send({
                message: "Employee with same email already Exists"
            });

        const _upperCaseFirstLetter = (string) => {
            string = string.toLowerCase();
            let nameArr = string.split(" ");
            nameArr = nameArr.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
            return nameArr.join(" ");
        };

        if (firstName && lastName && username && password && role) {
            firstName = _upperCaseFirstLetter(firstName.trim());
            fatherName = _upperCaseFirstLetter(fatherName.trim());
            lastName = _upperCaseFirstLetter(lastName.trim());
            motherName = _upperCaseFirstLetter(motherName.trim());
            username.toLowerCase();
            const profileImage = "/assets/img/avatar.png";
            // admin_id = 1;
            active = true;
            const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

            if (password.length < 5) {
                return res.status(400).json({
                    message: "Password length should be greater than 5."
                })
            }
            if (!regularExpression.test(password)) {
                return res.status(400).json({
                    message:
                        "password should contain atleast one number and one special character",
                });
            }
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const passwordHash = await bcrypt.hash(password, salt);

            try {
                const employee = new employeeModel({
                    firstName,
                    lastName,
                    username,
                    fatherName,
                    motherName,
                    role,
                    passwordHash,
                    active,
                    profileImage,
                    // admin_id,
                    joining_date,
                    appraisal_month,
                    email,
                    aadhaar_number,
                    pan_number,
                    phoneNumber,
                    address,
                    perm_address,
                    dob,
                    reference_by,
                    weekly_off,
                    shift,
                    allocated_under,
                    emergency_contact,
                    biometric_id,
                    education,
                    bank_details,
                    official_email
                });
                await employee.save();
                res.status(200).send({message:"Employee Added Successfully"})
            } catch (err) {
                log.error(err, "Error occurred while adding employee to the DB");
                let error = new Error(`Error occurred while registering employee - ${err.message}`);
                error.statusCode = 400;
                next(error);
            }
        } else {
            let error = new Error("Please enter all the fields");
            error.statusCode = 400;
            next(error);
        }
    } catch (err) {
        console.log(err, "ErrorLog::");
        let error = new Error("Unable to Add employee");
        error.statusCode = 400;
        next(error);
    }
}

module.exports = addEmployee