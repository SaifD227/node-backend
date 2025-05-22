import mongoose, { model } from "mongoose";

const userSchema = new mongoose.schema ({
    name:String,
    email:String,
    age:Number,
});

model.exports = mongoose.model("User", userSchema);