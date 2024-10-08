const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log(`🟠 MongoDB starts connecting...`);

    const uri = process.env.MONGOURI;

    mongoose.connect(uri)
        .then(() => {
            console.log(`🟢 MongoDB connected`);
        }).catch((err) => {
            console.log(`🔴 MongoDB could not connet`);
            console.error(err);
        });
};

module.exports = connectDatabase;