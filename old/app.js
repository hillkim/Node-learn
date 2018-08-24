//console.log(module);



//global instead of window object
//avoid defining in global stae--please embrace modularity
//module--every file considered as modules--private--explicitly export and make it 
//pyublic if you wish to resuse in another file

//using our logger


const log = require('./logger');

console.log(log);

log("message");


//using the log class
 const Logger = require('./logg');

const logger= new Logger();

logger.on("message",(arg) =>{

    console.log("Message sent",arg);


}); 

logger.log('message');