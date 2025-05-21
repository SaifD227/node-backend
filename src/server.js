 import express from "express";
 import userRoutes from "./routes/userRoutes";

const app  = express();

const  port = process.env.PORT || 5001;

app.use(express.json());
app.use(userRoutes);


app.use('/api',userRoutes);

app.get("/",(req,res) =>{
 res.send("Hello world from backend   hksfkdfhdk");
})

app.listen(port, () =>{
    console.log(`server is running on port:http:localhost:${port}`);
})