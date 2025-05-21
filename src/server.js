 import express from "express";

const app  = express();

const  port = process.env.PORT || 5001;

app.get("/",(req,res) =>{
 res.send("Hello world from backend   hksfkdfhdk");
})

app.listen(port, () =>{
    console.log(`server is running on port:http:localhost:${port}`);
})