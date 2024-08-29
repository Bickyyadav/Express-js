const User = require("../models/user-model");
const bcrypt = require("bcrypt");


const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("welcomme to the worl best mern stack page we are going to red2");
  } catch (error) {
    console.log(error);
  }
};


const register = async (req, res) => {
  try {
    //console.log(req.body);
    
    const {username, email, phone, password} = req.body;

    //checking user is already exist or not  one email is the user input email and other email in the datbase to check 
    const userExist =  await User.findOne({email:email});

    if(userExist){
      return res.status(400).json({
        msg: " email already signup  pls signin"})   
       }


//---------------------------passwod hashing------------
const saltRound = 10;
const has_password = await bcrypt.hash(password, saltRound)


       const userCreated = await User.create({ 
        username,
        email,
        phone,
        password:has_password 
        });

       res.status(201).json({                          //---------------CALLING FUNCTION TO JWT TOKEN
        msg: "user is created successfully", token: await userCreated.generateToken() ,userId: userCreated._id.toString(), 
       });


  } catch (error) { 
    res.status(500).send("Internal server error")
   
  }
};


// ############################
// ########################## user login logic
const login = async(req,res) => {
  try {
    const {email , password} = req.body ;
    // console.log(req.body );


    const userExist = await User.findOne({ email:email });
    
    if(!userExist){
      return res.status(400).json({message:"Invalid Credentials and password may be"});
    }                   

    //##########################if the user exist then i have to verified the password is correct or not entered
    const isPasswordvalid =await bcrypt.compare( password , userExist.password );

    if(isPasswordvalid){
      return res.status(200).json({
        msg: "Login successfully", token: await userExist.generateToken() ,userId: userExist._id.toString(),
      })
      }
      else{
        res.status(400).json({
          "msg": "Invalid email or password"
        })
    }

  } catch (error) {
    res.status(500).json("internal server error there is prblem ");

    //next(error);       global catch error finding
  }
};



// ########################################
// ######################################## contact form 

const Contactform = 





module.exports = { home , register ,login };
