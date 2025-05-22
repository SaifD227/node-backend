import User from "../models/user.model";

//create  user
exports.createUser = async (req,res) => {
    const user = new User (req.body);
    await user.save();
    res.json(user);
}

//get all users
exports.getAllUsers = async (req,res) => {
    const users = await User.find().lean();
    res.json(users);
}
//update user
exports.updateUser = async (req,res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean();
    res.json(user);
}
//delete user
exports.deleteUser = async (req,res) => {
    const user = await User.findByIdAndDelete(req.params.is).lean();
    res.json({message:" User deleted successfully"});
}

