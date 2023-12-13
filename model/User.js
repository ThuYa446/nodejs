class User{
    constructor({id,name,username,password,nrc,email,phno,user_type,dob,gender,address}){
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.nrc = nrc;
        this.email = email;
        this.phno = phno;
        this.user_type = user_type;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
    }
}

module.exports=User