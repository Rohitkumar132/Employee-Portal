const response = require('../../common/responseHandler');
const storeCategoryModel = require('../../models/storeCatergory');

const getStoreCategory = async(req,res)=>{
    try {
        const list = await getStoreCategory.find({});
        response(res, true, "Store Catergory Fetched Successfully", list); 
    } catch (error) {
        response(res, false, "Internal server error", null , 501 , error.message);       
    }
}

module.exports = getStoreCategory;