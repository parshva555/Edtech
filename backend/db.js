const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/"

const mongoURI = "mongodb://127.0.0.1:27017"


// const mongoURI = "mongodb://192.168.1.100:27017/"


const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo");
}
module.exports = connectToMongo;

// const dbUrl = "mongodb://127.0.0.1:27017/yelp-camp";
// mongoose.connect(dbUrl);
// const db = mongoose.connection;
// db.on('error',console.error.bind(console,'mongo connection error:'))
// db.once('open',function(){
//     console.log("mongo Connection done");
// })