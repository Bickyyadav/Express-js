const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: Number, 
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

//--------------gernerate token 
userSchema.methods.generateToken = async function(){

    try {
        return jwt.sign({                  // -----------------generating token 
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        }, process.env.JWT_SECRET,{ 
            expiresIn: "30d",
        });  //-------------------------from envfile 
        
    } catch (error) {
        console.error(error)
        
    }


 };
 
//while creating first shoudl be capital anywhere it must be capital 
const User = new mongoose.model("User",userSchema)

// in the box we have towrite ( user, userschema ) = userschema is we wote to type of or schema and user is convention it converted into users
module.exports = User ;