// const http=require("http");


// const server=http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/html'});

//     response.write("<h1>Hello, Welcome to NodeJS Server!! </h1>");
//     response.end();
// });

// const port=5000;

// server.listen(port, ()=>{
//     console.log("Node JS Server is running on Port: "+port)
// })


const express=require("express");

const app=express();

const usersRoute=require("./routes/users")
const productsRoute=require("./routes/products")

app.use("/users",usersRoute);
app.use("/products",productsRoute)

app.get("/",(request,response)=>{
    response.send("<h1>Hello, Welcome to NodeJS Server Express!! </h1>");
});

const port=5000;

app.listen(port, ()=>{
    console.log("Node JS Server is running on Port: "+port)
})