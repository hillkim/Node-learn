//checking what i can remember
/* const http = require('http');

const server=http.createServer((req,res) => {
if(red.url === '/'){
  res.write('Hello man');
  res.end;

}
if(res.url === 'api/man'){

    res.write('hello the other man');
    res.end();
}


});
 */


 //using express

 const express = require('express');
 const app = express();
 
app.use(express.json());//sets a req.body
app.use(express.static('files'));
app.use(express.urlencoded({extended : true}));

 //some working values

 const men =[
     {id:1,name :'Man'},
     { id: 2, name: 'WoMan' },
     { id: 1, name: 'ChilMan' },
 ];
 
 app.get('/',(req, res) => {
    res.send('hello crack');
 });

app.get('/api/man', (req, res) => {
    res.send(men);
});

app.post('/api/men',(req,res) =>{
 const man ={
     id: man.lenth +1,
     name: req.body.name,
 }

 men.push(man); 
 res.send(man);
});
const port=process.env.PORT || 3000;

app.listen(port,() => console.log('Man nangoja '+ port +' io kitu'));