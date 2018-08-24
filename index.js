const express =require('express');
const app = express();

app.use(express.json());//middleware

//using express
app.get('/',(req,res) =>{
res.send('Welcome to This Filthy Site bruh');


});
//things
app.get('/api/things', (req, res) => {
    res.send({'Things to do':{1:'eat',2:'live',3:'pray',4:'worship'}});

});
//getting specific thing
app.get('/api/things/:year/:month',(req,res) => {
  //res.send(req.params);
  //
   res.send(req.query);
});

//things list
const things=[
    { id: 1, name: "Drinking" },
    { id: 2, name: "Walking" },
    { id: 3, name: "Eating" },
    { id: 4, name: "Playing" },
    { id: 5, name: "Praying" },
    { id: 6, name: "Reading" },
    { id: 7, name: "Sleeping" },
];

//fetching a thing
app.get('/api/things/:id',(req,res) => {
let thing = things.find(c => c.id === parseInt(req.params.id));
if (!thing){ res.status(404).send('You cant do anything yet');
}
res.send(thing);
});

//posting a thing
app.post('/api/things',(req,res) => {
const thing={
   id:things.length+1,
   name:req.body.name
};
things.push(thing);
res.send(thing);
});s

//getting the set port in env

const port =process.env.PORT || 3000;

app.listen(port,()=>{ 
    console.log('Am just listening to port '+port +' .../n please let me know if you would like me to listen to another one.......//#endregion')

});