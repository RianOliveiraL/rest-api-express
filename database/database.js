const mongoose = require('mongoose');

const {MONGO_URI} = process.env;

exports.connect = () => {
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false,
        })
        .then(() => {
            console.log('You are now logged in database');
        })
        .catch((error) => {
            console.log("Connection failed, exiting now...");
            console.log(error);
            process.exit(1);
        });
}