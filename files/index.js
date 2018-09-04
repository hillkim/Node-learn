const express =require('express');
const app = express();
const log = require('./logger');//custom middleware
const things = require('../routes/home');

app.use(express.json());//middleware
app.use(log);

//exporting things
app.use('/api/things',things);

const port =process.env.PORT || 3000;

app.listen(port,()=>{ 
    console.log('Am just listening to port '+port +' .../n please let me know if you would like me to listen to another one.......//#endregion')

});