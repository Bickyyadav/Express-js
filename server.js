 require("dotenv").config();
const express   = require("express");
const app = express();
 app.use(express.json());
const authrouter = require("./router/auth-router");
const Contactrouter = require("./router/contact-router");
const connectdb = require("./utils/db");


app.use("/api/auth",authrouter);
app.use("/api/form",Contactrouter);


const PORT=3000;

connectdb().then(() =>{ 
app.listen(PORT,()=>{
    console.log(`server is started on port ${PORT}`);
    
})
})