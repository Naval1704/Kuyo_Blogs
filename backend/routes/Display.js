const express = require("express");
const router = express.Router();

router.post("/blogs",async (req, res) => {
    try {
        res.send([global.BlogData])
    } catch (error) {
        
    }
})

router.post("/blogs/:id",async (req, res) => {
    const id=req.params.id;
    const sendBlog=global.BlogData.find((e)=>{
        if(e.id===id) return e;
    })
    try {
        res.send([sendBlog]);
        // here put the object inside a array as we are recieving the first object of the array so we need to send an array in place of an object
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})


module.exports = router;