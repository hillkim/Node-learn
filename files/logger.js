function logger (req,res,next){
console.log("Has been logging");
next();
}

module.exports = logger;