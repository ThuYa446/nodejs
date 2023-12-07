const db = require("../db");
const resp = 

exports.getAllUsers = async () => {
    const userList = await db.query("SELECT * FROM users.user");
    return userList.rows;
}

exports.findById = async (id) => {
    const user = await db.query('SELECT * FROM users.user where id = $1',[id]);
    return user.rows[0];
}

exports.createUser = async (user) => {
    const createUser = await db.query('INSERT INTO users.user (id ,name ,username ,password ,nrc ,'+
    'email ,phno ,user_type ,dob ,gender ,address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
    ,[user.id,user.name,user.username,user.password,user.nrc,user.email,user.phno,user.user_type,user.dob,user.gender,user.address],
    // (error,result) => {
    //     if(error){
    //         console.error('Error in Executing INSERT Query ',error);
    //     }
    // }
    );
    return createUser;
}

exports.updateUser = async(user,id) => {
    const updatedUser = await db.query('UPDATE users.user SET name = $1 WHERE id = $2',[user.name,id],
    // (error,result) => {
    //     if(error){
    //         console.error('Error in Executing Update Query ',error);
    //     }
    // }
    ) 
    return updatedUser;
}

exports.deleteUser = async(id) => {
    const deletedUser = await db.query('DELETE FROM users.user WHERE id = $1',[id],
    // (error,result) => {
    //     if(error){
    //         console.error('Error in Executing Update Query ',error);
    //     }
    // }
    )
    return deletedUser;
}