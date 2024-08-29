const Contact = require("../models/contact-model");
const Contactform = async(req,res) => { 
    try { 
        const respones = req.body; 
        await Contact.create(respones); 
        return res.status(200).json({ message : "message send Successfully"});
        
    } catch (error) {
        return res.status(500).json({ message: "Message not delived try again Once more" }) ;
        
    }
};

module.exports = Contactform;