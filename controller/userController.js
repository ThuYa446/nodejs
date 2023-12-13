const userService = require("../service/UserService")
const User = require("../model/User")
const Response = require("../dto/Response");
const ResponseData = require("../dto/Response");

exports.getAllUsers = async (req,resp) => {
    try{
        const user = await userService.getAllUsers();
        responseData = new ResponseData(200,'Fetch Successfully',user);
        resp.json(responseData);
    }catch(error){
        responseData = new ResponseData(500,'Internal Server Error',error.message)
        resp.json(responseData);
    }
}

exports.findById = async (req,resp) => {
    try{
        const {id} = req.params;
        const user = await userService.findById(id);
        responseData = new ResponseData(200,'Fetch Successfully',user);
        resp.json(responseData);
    }catch(error){
        resp.status(500).json({ error: error.message });
    }
}

exports.createUser = async (req,resp) => {
    try{
        user = new User(req.body);
        const newUser = await userService.createUser(user);
        resp.status(200).json(newUser);
    }catch (error) {
        resp.status(500).json({ error: error.message });
    }
}

exports.updateUser = async (req,resp) => {
    try{
        const {id} = req.params;
        const user = userService.findById(id);
        user.name = req.body.name;
        console.log(user);
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
