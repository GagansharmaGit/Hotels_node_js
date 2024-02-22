const express = require("express")
const app = express();
const db = require('./db')
require("dotenv").config()
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body




app.get('/',function(req,res){
    res.send("welcome......")
})

//importing  the router files
const personRoutes = require("./routes/personRoutes")
app.use("/person",personRoutes);

const menuItemRoutes = require("./routes/menuItemRoutes")
app.use('/menu',menuItemRoutes)

app.listen(PORT,()=>{
    console.log(`listenning to port ${PORT}`)
})