const userDao = require("../repository/UserDao");

exports.getAllUsers = async () => {
    return userDao.getAllUsers();
}

exports.findById = async (id) => {
    return userDao.findById(id);
}

exports.createUser = async (user) => {
    return userDao.createUser(user);
}

exports.updateUser = async (user,id) => {
    return userDao.updateUser(user,id);
}

exports.deleteUser = async (id) => {
    return userDao.deleteUser(id);
}