const express = require("express");
const router = express.Router();  
const { home, register ,login  } = require("../controllers/auth-controller") ;
const validate  = require("../middleware/validate-middleware");
const signupSchema = require("../validator/auth-validator");


// Root route
// router.get("/", (req, res) => {
//     res.status(200).send("Welcome to the world's best MERN project");  // Changed status to 200
// });

// // Register route
// router.get("/register", (req, res) => {  // Added req and res parameters
//     res.status(200).send("Welcome to the register page");
// });

router.route("/").get(home);

// we have use zod so we use validate sihnupschema becse we hav to check the user input in register time only 
router.route("/register").post( validate(signupSchema),register); 
router.route("/login").post(validate(signupSchema), login); 

 
module.exports = router;
