import express from "express";
import {
    createProduct,
} from "../controller/product.Controller.js";

const router = express.Router();

router.post("/", createProduct);
export default router; 