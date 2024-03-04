const express=require("express");

const router=express.Router();

// Defining a Route 

router.get("/",(request,response)=>{
    response.send("This is a Product Route");
    // We will render this response  http://localhost:5000/user
})


router.get("/6564",(request,response)=>{
    response.send("This is a Product Route for user 6564");
    // We will render this response  http://localhost:5000/user/1001
})


router.get("/6567",(request,response)=>{
    response.send("This is a Product Route for user 6567");
    // We will render this response  http://localhost:5000/user/1001
})

module.exports=router;