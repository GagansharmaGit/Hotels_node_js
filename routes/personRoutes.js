const express = require("express");
const Person = require('./../models/Person')
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const data = req.body; // Corrected from res.body to req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data Saved:", response);
        res.status(200).json(response);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



router.get("/",async (req,res)=>{
    try {
        const data = await Person.find()
        console.log("success fetch")
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal errororororor"})
    } 
})


router.get("/:workType",async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType == "chef" || workType == "manager" || workType == "waiter"){
        
                const response = await Person.find({work : workType});
                console.log("fetched data from Worktype");
                res.status(200).json(response);
        } else{
            res.status(404).json({error:"Invalid Work Type"})
        }
    }
    catch (error) {
        console.log(error)
        res.status(404).json({error:" Catch : Invalid Work Type"})
    }
})

router.put("/:id",async (req,res)=>{
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//return the updated document
            runValidators:true//run mongoose validation
        })
        if(!response){
            res.status(400).send({error:"person not found"})
        }
        res.status(200).send(response)
    } catch (error) {
        res.status(404).json({error:" Catch : Invalid user id"})
    }
})
router.delete("/:id",async (req,res)=>{
    try {
        const userId = req.params.id;
        
        const response = await Person.findOneAndDelete(userId)
        if(!response){
            res.status(400).send({error:"person not found"})
        }
        console.log("person deleted successfully")
        res.status(200).send(response);
    } catch (error) {
        res.status(404).json({error:" Catch : Invalid user id"})
    }
})

module.exports = router;