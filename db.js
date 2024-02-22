const mongoose = require("mongoose")

 // define mongo db connection url
 const mongoURL = 'mongodb://localhost:27017/hotels'

 //setup mongo db connection
 mongoose.connect(mongoURL)
 .then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection to MongoDB failed', err));


 const db = mongoose.connection;


 db.on('connected',()=>{
    console.log("connected.....................")
 });
 db.on('disconnected',()=>{
    console.log("not connected.....................")
 });


//exporting db
 module.exports = db;