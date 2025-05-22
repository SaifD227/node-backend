import express from "express";
import { createOrder } from "../controller/order.Controller.js";

const router = express.Router();


router.post("/", createOrder);

export default router; 