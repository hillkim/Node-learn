//creating the first module
//taking for instance its going to be used as a loggingb serv
//service in our app
//logs messages in the cloud(http)

console.log(__dirname);
console.log(__filename);

var url="http://mylogger.io/log";

//our private function
function log(message){

    console.log(message);
}

// making it available
  //as an object
//      const log = require('./logger');

//as a single function
module.exports =log;//since its single fuction we dont have to export an object
//es6
/*
const _log = log;
export { _log as log };

*/


//using built in apis or modules

const path = require('path');

path.parse(__filename);

console.log(path);