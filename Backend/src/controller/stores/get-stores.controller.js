const response = require('../../common/responseHandler');
const storeModel = require('../../models/store');

const getStores = async(req,res)=>{
    try {
        const storeList = await storeModel.find({});
        response(res, "Stores Fetched Successfully", true, storeList)
    } catch (error) {
        response(res, false ,"Internal server error",501, null);
    }
}

module.exports = getStores;