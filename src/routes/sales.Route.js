import express from "express";
import getTotalSalesPerProduct from "../controller/sales.Controller.js";

const router = express.Router();

router.get("/total-sales-per-product", getTotalSalesPerProduct);

export default router;