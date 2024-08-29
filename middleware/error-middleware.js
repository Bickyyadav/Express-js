const errorMiddleware = (err,req,res, next) => {
    const status = err.status || 500 ;    
    const message = err.message || "Backend Error";
    const extraDetails = err.extraDetails || "Error from backend";

    return res.status(status).json({ message, extraDetails });  
}


module.exports= errorMiddleware;




// agar app kahi pe erro likna ho tab aap next(error) likh ke send kardo o sab error yeha pe error agayega jise

// app.use(errorMiddlewar); error middleware from the folder of error-middleware.js folder we have used 
// try { 
    
// } catch (error) {
//     next(error);
// }