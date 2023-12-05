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
