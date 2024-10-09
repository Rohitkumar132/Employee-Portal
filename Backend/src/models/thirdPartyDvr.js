const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThirdPartyDvrSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String
    },
    ip: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    additional_info: {
        type: String
    }
});

module.exports = ThirdPartyDvrSchema;