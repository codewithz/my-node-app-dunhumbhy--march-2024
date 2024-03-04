const express=require("express");

const router=express.Router();

// Defining a Route 

router.get("/",(request,response)=>{
    response.send("This is a User Route");
    // We will render this response  http://localhost:5000/user
})


router.get("/1001",(request,response)=>{
    response.send("This is a User Route for user 1001");
    // We will render this response  http://localhost:5000/user/1001
})


router.get("/1002",(request,response)=>{
    response.send("This is a User Route for user 1002");
    // We will render this response  http://localhost:5000/user/1001
})

module.exports=router;