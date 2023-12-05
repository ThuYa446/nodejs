const db = require("../db");
const resp = 

exports.getAllUsers = async () => {
    const userList = await db.query("SELECT * FROM users.user");
    return userList.rows;
}

exports.createUser = async (user) => {
    const createUser = await db.query('INSERT INTO users.user (id ,name ,username ,password ,nrc ,email ,phno ,user_type ,dob ,gender ,address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING * '
    ,[user.id,user.name,user.username,user.password,user.nrc,user.email,user.phno,user.user_type,user.dob,user.gender,user.address]);
    return createUser.rows[0];
}

exports.updateUser = async(id) => {
    const updatedUser = await db.query('UPDATE ')
}