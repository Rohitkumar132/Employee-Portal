const customerModel = require('../../models/customer');
const log = require('lambda-log');
const Employee = require('../../models/employee');
const getCustomer = async(req,res,next)=>{
    const data = req.user;
    try {
        log.info("Fetching Customer" , {"employeeId" : "data._id" , "firstName": "data.firstName" , "file" : "get.customer.controller.js", "method":"getCustomer"})
        const customer = await customerModel.find({});
        return res.status(200).send({message:"Customer Fetched Successfully" , customer})
    } catch (err) {
        log.error(err, "Error occurred while fetching customer from DB");
                let error = new Error(`Error occurred while fetching customer - ${err.message}`);
                error.statusCode = 400;
                next(error);
    }
}

module.exports = getCustomer;