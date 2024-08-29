
const express = require("express");
const router = express.Router();
const Contactform = require("../controllers/contact-controller")



router.route("/Contact").post(Contactform); 

module.exports = router;
