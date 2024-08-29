const mongoose  = require("mongoose");



 const URL = process.env.MONGODB_URI;
// const URL = "mongodb://localhost:27017/merndatabase_admin"

const connectdb = async()=>{
    try {

        await mongoose.connect(URL);
        console.log("database connected successfully");
        
        
    }catch (error) {
        console.error("database connection failed ");

    }
}


module.exports = connectdb;