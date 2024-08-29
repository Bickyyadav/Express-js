const validate = (schema)=> async( req, res, next)=>{              //----------------shema is of signupschma form zod folder we have exporeted
    try { 
        const parseBody = await schema.parseAsync(req.body) //parseAsync(req.body) is an asynchronous method provided by Zod that validates the data in req.body against the schema.
          //----------- schema.parseAsync(req.body) this is a method and helps use to check the use has ented write schema or not
        //   line no 3 is the zod bydefault schema to check the input
        req.body= parseBody; 
        next(); 
    } catch (err) {

        const message= err.errors[0].message;
        console.log(message);
        
        res.status(400).json({ msg: "inValid email or password" })

        //global error catchin in one folder
        // next(message);
    }
}


module.exports = validate;