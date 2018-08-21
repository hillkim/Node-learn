const os = require('os');


const Tmemory = os.totalmem();
const Fmemory = os.freemem(); 

//using es6 style concat

console.log(`Total Memory: ${Tmemory}`);
console.log(`Free Memory: ${Fmemory}`);

//working with files
const file = require('fs');

//synchronous stuff
const files = file.readdirSync('./');
console.log(files); 


//asynch good stuff


file.readdir('./',function(err,results){
if(err) console.log("Error",err);
else console.log("Results ",results);

});

//working with events



//emmitor class form events module

const EventEmittor =require('events');

const emmitor = new EventEmittor();

emmitor.addListener('hello',(arg) => { //you can also use (emmitor.on)
console.log('Hello too bro',arg);

});

emmitor.emit("hello",{id : "Hillary",name : "Kimaita"});



