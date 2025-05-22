import dotenv from 'dotenv';
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import salesRoutes from "./routes/sales.Route.js";
import productRoutes from "./routes/product.Route.js";
import orderRoutes from "./routes/order.Route.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5001;

app.use(express.json());

connectDB();

app.use('/api', userRoutes);
app.use('/api', salesRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get("/", (req, res) => {
    res.send("Hello world from backend ");
})

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
})