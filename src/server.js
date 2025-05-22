import dotenv from 'dotenv';
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(userRoutes);

connectDB();

app.use('/api', userRoutes);

app.get("/", (req, res) => {
    res.send("Hello world from backend ");
})

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);

})