import Order from "../models/order.model.js";

const getTotalSalesPerProduct = async (req, res) => {
    try {
        const sales = await Order.aggregate([
            { $unwind: "$products" },
            {
                $group: {
                    _id: "$products.productId",
                    totalQuantity: { $sum: "$products.quantity" },
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "_id",
                    as: "productDetails"
                }
            },
            { $unwind: "$productDetails" },
            {
                $project: {
                    _id: 0,
                    productId: "$_id",
                    totalQuantity: 1,
                    productName: "$productDetails.name",
                    productPrice: "$productDetails.price",
                    totalSales: { $multiply: ["$totalQuantity", "$productDetails.price"] }
                }
            },
            { $sort: { totalQuantity: -1 } }
        ]);
        res.status(200).json(sales);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Aggregation Error" });
    }
}

export default getTotalSalesPerProduct;