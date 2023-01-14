const logRequest = (req,res,next) =>{
    console.log('Request in',req.path);
    next();
}

module.exports = logRequest