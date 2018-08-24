const http = require('http');

//this is an extension of emmitor class

const server = http.createServer((req,res) =>{
    
    if (req.url === '/'){

         res.write("its lit man");
         res.end();

    }
    if (req.url==='/api/houses'){//list of courses from the database
    
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

server.listen(3000);
console.log("listening to port 3000.....")


/* low level shit
server.on("connection",(socket) =>{

    console.log("new connection ....");
}) */