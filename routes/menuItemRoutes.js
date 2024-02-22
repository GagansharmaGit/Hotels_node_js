const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItems");


router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data); // Corrected from new newMenu(data) to new MenuItem(data)
        const response = await newMenuItem.save(); // Corrected from newMenu.save() to newMenuItem.save()
        console.log("Data saved successfully:", response);
        res.status(200).json(response);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/",async (req,res)=>{
    try {
        const data = await MenuItem.find();
        console.log("data fetched from /menu get")
        res.status(500).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internam errorrr"})
    }
})

router.get("/:foodType", async (req,res)=>{
    try {
        const food = req.params.foodType
        if(food == "Spicy" || food == "Sweet" || food == "Sour"){
            const response = await MenuItem.find({taste : food});
            res.status(200).send(response);
        }else{
            res.status(404).json({error:"Invalid food Type"})
        }
    } catch (error) {
        console.log(error)
        res.status(404).json({error:" Catch : Invalid food Type"})
    }
})

module.exports = router;