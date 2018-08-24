const EventEmitter = require('events');

class Logg extends EventEmitter{

//function
    log(message){
  
        console.log(message);
        
        //emit and event
        this.emit("message was sent",{id : "hillary" ,name: "Me and I myself",});

    }


}

module.exports = Logg;