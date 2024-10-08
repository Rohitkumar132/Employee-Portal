const response = require('../../common/responseHandler');
const storeCategoryModel = require('../../models/storeCatergory');

const addStoreCategory = async(req,res) =>{
    let data = req.user;

    try {
        if(data.role === "superadmin" || data.role === "teamleader"){
            const storeCategory = await new storeCategoryModel({
                ...req.body
            })
            await storeCategory.save();
            response(res, true, "Store Category added Successfully", storeCategory)
        }else{
            response(res, false, "You are note authorized to perform this action")
        }
    } catch (error) {
        response(res, false, "Internal Server error",null, 500, error.message)
    }
}

module.exports = addStoreCategory;