const mongoose=require('mongoose');

//db
const db=require('./config/keys').mongoURI;
//db connection
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('connected again'))
    .catch((err) => console.error("failed", err))

//class schema
const matSchema = new mongoose.Schema({
    name: String,
    route: [String],
    sacco: String,
    fair: Object
});
//instance of mat
const Matatu = mongoose.model('Matatu', matSchema);
//saving the document
async function saveMat() {
    const matatu = new Matatu({
      name: "Black Whereva",
      route: [
        "Tao",
        "Eastleigh",
        "Mlango",
        "Chai Road",
        'Guru NarNark', 
        'Parkroad',
      "Mlango Kubwa",
         "Umoja"
      ],
      sacco: "Eastleigh Sacco",
      fair: {
        Chai_Road: 40,
        Mlango: 60,
        Tao: 20,
        Parkroad: 40,
        Mlango_Kubwa: 100
      }
    });

    const result = await matatu.save();
    console.log(result);
}
saveMat();