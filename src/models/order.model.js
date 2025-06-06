import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true,
        },
        quantity: { type: Number, required: true },
    },
    ],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Order", orderSchema);