const express=require('express');
const app=express();
const Joi = require('joi');

app.use(express.json());

const things=[
    { id: 1, name: "eat" },
    { id: 2, name: "sleept" },
    { id: 3, name: "Dance" },
    { id: 4, name: "Walk" },
];
//validating request using joi
function validateThings(genre) {
    const schema = {
        name: Joi.string().min(3).required()

    };
    return Joi.validate(genre, schema);
}

//get

app.get("/api/things", (req, res) => {
  res.send(things);
  
});

//post

app.post('/api/things',(req,res)=>{
    const{error}=validateThings(req.body);
    if (error) return res.status(400).send(error.details[0].message);
 const thing={
     id:things.length +1,
     name:req.body.name

 };
 things.push(thing);
  res.send(things);
    
});

app.put('',() =>{
    
    
});

//delete
app.delete('/api/things/:id',(req,res) =>{
res.send(req.name.id);

});

const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}......`);
});