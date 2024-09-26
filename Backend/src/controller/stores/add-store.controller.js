const storeModel = require('../../models/store');
const customerModel = require('../../models/customer')
const log = require('lambda-log')

const addStore = async (req, res, next) => {
    const data = req.user;
    const { firstName, lastName, name, store_code, address, storeImage, city, state, zipcode, timezone, phoneNumber, date_added, activation_date, lock_date, store_lock_reason, store_config_completed, nest_account, store_phoneNumber, pos_name, pos_qty, timings, timings_category } = req.body
    log.info("Adding employee to the DB", { "employeeId": data._id, "firstName": data.firstName, "file": "add-store.controller.js", "method": "addStore" });
    try {
        const store = await storeModel.create({
            name,
            store_code,
            address,
            storeImage,
            city,
            state,
            zipcode,
            store_phoneNumber,
            nest_account,
            pos_qty,
            pos_name,
            timings,
            timings_category
        });
        const customer = await customerModel.create({
            firstName,
            lastName,
            phoneNumber,
            email
        });
        await store.save();
        await customer.save();
        return res.status(200).send({ message: "Store Added Successfully", data: { customer, store } });
    } catch (err) {
        log.error(err, "Error occurred while adding Store to the DB");
        let error = new Error(`Error occurred while adding stores - ${err.message}`);
        error.statusCode = 400;
        next(error);
    }
}

module.exports =  addStore;