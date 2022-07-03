const userModel = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

exports.postregistration = (req, res)=>{
console.log("dsdsdsdsdsd",req.body)
const name=req.body.name;
const emailId=req.body.emailId;
const phone=req.body.phone;
const password=req.body.password;
const age=req.body.age;
const salary=req.body.salary;
const designation=req.body.designation;
//const profileImage=req.body.profileImage
console.log("body value",name,emailId,phone,password,age,salary,designation);
return bcrypt.hash(password,12).then((hashPassword)=>{
    const Resgistration =new userModel({
        name:name,
        emailId:emailId,
        phone:phone,
        password:hashPassword,
        age:age,
        salary:salary,
        designation:designation
    })
    return Resgistration.save().then((results)=>{
    console.log("successfully inserted value",results);
    return res.status(200).json({
        success: true,
        message: "Successful",
        result: results
    
    
    })
    }).catch((err)=>{
    console.log("value not insetted",err);
    return res.status(401).json({
        success:false,
        message:"error"
    })
    })
}).catch((err)=>{
    return res.status(401).json({
        success:false,
        message:err
      })
})

}
exports.postlogin=(req,res)=>{
console.log("body login value",req.body);
const emailId=req.body.emailId
const password=req.body.password 
console.log("body post login value",emailId,password);
userModel.findOne({emailId:emailId}).then((uservalue)=>{
    console.log(uservalue);
if(!uservalue){
return res.status(401).json({
    success:false,
    message:"Invalid Email"
})
}
return bcrypt .compare(password,uservalue.password).then((result)=>{
if(!result){
    return res.status(401).json({
        success:false,
        message:"Invalied Password"
    })
}else{
    const Token_jwt=jwt.sign({emailId:uservalue.email},"ABCDE",{expiresIn:'1h'})
    return res.status(201).json({
        success:true,
        message:"Login successful",
        email:emailId,
        jwtToken:Token_jwt
       })
}
}).catch((err)=>{
    return res.status(401).json({
      success:false,
      message:err
    })
})
}).catch((err)=>{
    console.log(err);
})
}