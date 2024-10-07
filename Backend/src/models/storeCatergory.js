const mongoose = require("mongoose");

const storeCategorySchema = new mongoose.Schema({
    store_category: {
        type: String,
        unique: true
    },

});

const storecategory = new mongoose.model("storecategory", storeCategorySchema);

module.exports = storecategory;