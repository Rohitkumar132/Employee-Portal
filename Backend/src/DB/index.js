const log= require('lambda-log');
const mongoose = require('mongoose');

const connectDatabase = ()=>{
    try {
        mongoose.connect(process.env.MONGOURI);
        log.info("Connect to Database Successfully", { "file" :"DB index.js"})
    } catch (error) {
        log.info("Unable to connect to DataBasae", { "file" :"DB index.js"})
    }
};

module.exports = connectDatabase;