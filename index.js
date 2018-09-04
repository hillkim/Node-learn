
const mongoose= require('mongoose');
const db = require('./config/keys').mongoURI;


//  .then(() => console.log('connected to mongo db'))
//  
/* const connection=new Promise((resolve,reject)=>{
    mongoose.connect('mongodb://localhost/matapp');
        resolve(console.log('connected to mongo db'));
});
connection
           .then(() => console.log("connected "))
           .catch(err => console.error('Error cant connect to mongodb', err));

           //lets say matatus */

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('connected again'))
    .catch((err) => console.error("failed",err))        

    //class schema
const matSchema =new mongoose.Schema({ 
               name:String,
               route:[String],
               sacco:String,
               fair:Object
           });
//instance of mat
    const Matatu = mongoose.model('Matatu',matSchema);

           async function saveMat() {
               const matatu = new Matatu({
                   name: "Forward Traveller",
                   route: ['Kayole', 'Stadii', 'Umoja', 'Komarock', 'Mihango'],
                   sacco: 'FT Sacco',
                   fair: {
                       "Kayole-Tao": 40,
                       'Stadii-Tao': 60,
                       'Umoja-Tao': 20,
                       'Komarock': 40,
                       'Mihango': 100

                   }

               });

               const result = await matatu.save();
               console.log(result);  
           }
          //saveMat();


          //getting data

          async function getMatatus(){
         
          const matatus=await Matatu
          .find()
          .sort("-1")
          console.log(matatus);
                           

          }
          getMatatus();