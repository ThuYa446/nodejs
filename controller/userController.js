const userService = require("../service/UserService")
const User = require("../model/User")
exports.getAllUsers = async (req,resp) => {
    try{
        const user = await userService.getAllUsers();
        resp.json(user);
    }catch(error){
        resp.status(500).json({ error: error.message });
    }
}

exports.findById = async (req,resp) => {
    try{
        const {id} = req.params;
        const user = await userService.findById(id);
        resp.json(user);
    }catch(error){
        resp.status(500).json({ error: error.message });
    }
}

exports.createUser = async (req,resp) => {
    try{
        const {id,name,username,password,nrc,email,phno,user_type,dob,gender,address} = req.body;
        user = new User(id,name,username,password,nrc,email,phno,user_type,dob,gender,address);
        const newUser = await userService.createUser(user);
        resp.status(201).json(newUser);
    }catch (error) {
        resp.status(500).json({ error: error.message });
    }
}

exports.updateUser = async (req,resp) => {
    try{
        const {id} = req.params;
        const user = userService.findById(id);
        user.name = req.body.name;
        await userService.updateUser(user,id);
        resp.json({
            code :200,
            message:"Updated Successful",
            data: user,
    });
    }catch (error) {
        resp.status(500).json({ error: error.message });
    }
}

exports.deleteUser = async (req,resp) => {
    try{
        const {id} = req.params;
         await userService.deleteUser(id);
         resp.json({
            code :200,
            message:"Delete Successful",
    });
    }catch(error){
        resp.status(500).json({ error: error.message });
    }
}
