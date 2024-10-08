const storeModel = require('../../models/store');
const response = require('../../common/responseHandler');

const addStoreConfig = async (req, res) => {
    let data = req.user;
    try {

        if (data.role === "superadmin" || data.role === 'teamleader') {


            const store = await storeModel.findById({ _id: req.params._id });
            store.configs["remote_sharing"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["video_server"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["camera_server"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["third_party_dvr"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["router_config"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["special_comments"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["notes"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["nest_geo_cam"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["media_service"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["vms_super_user"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });
            store.configs["other"].push({
                name: "N/A",
                ip: "N/A",
                username: "N/A",
                password: "N/A",
                additional_info: "N/A",
            });

            await store.save();
            response(res, true, "Store Config Added Successfully", store.configs);
        } else {
            response(res, false, "Unable to add Store Config", store.configs);
        }
    } catch (error) {
        response(res, false, "Internal Server error", error.message);

    }
};

module.exports = addStoreConfig;