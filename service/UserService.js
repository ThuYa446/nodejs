const userDao = require("../repository/UserDao");

exports.getAllUsers = async () => {
    return userDao.getAllUsers();
}

exports.createUser = async (user) => {
    return userDao.createUser(user);
}