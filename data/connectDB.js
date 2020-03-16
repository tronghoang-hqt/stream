var mongoose = require('mongoose').MongoClient;
const url = "mongodb://localhost:27017/myDB";
mongoose.connect(url, (err, db) => {
    if (err) {
        throw err;
    }
    console.log("Connect DB success");
});