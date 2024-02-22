const express = require("express")
const app = express();
const db = require('./db')
// const Person = require('./models/Person')
// const MenuItem = require("./models/MenuItems")/
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

app.listen(3000,()=>{
    console.log('listenning to port 3000')
})