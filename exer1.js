const mongoose=require('mongoose');

const db = require('./config/keys').exmongoURI;

mongoose.connect(db, { useNewUrlParser: true })
        .then(()=>console.log('connected to the db'))
        .catch((err)=>console.error('Problem with the connection as in :',err))


const courseSchema=new mongoose.Schema({

name:String,
author:String,
date:Date,
tags: [String],
isPublished:Boolean,
price:Number,
});

const Course=mongoose.model('Courses',courseSchema)


async function getCourses() {
    const result=await Course
        .find({ isPublished: true})
        .where({tags:'backend'})
        .select({ name: 1, price: 1 })
        .sort({ name: '1' });                 

    console.log(result);
    
}
getCourses();