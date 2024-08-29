const  mongoose = require("mongoose")

const ContactScheam = new mongoose.Schema({
    username: { type: String , required :true },
    email: { type: String, require: true },
    message:{ type: String , require: true },
});

const Contact = new mongoose.model("Contact", ContactScheam);

module.exports = Contact;   