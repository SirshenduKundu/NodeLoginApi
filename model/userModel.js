const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age : { type : Number, required : true},
    salary : { type : Number, required : true},
    designation : { type : String, required : true},
    // profileImage:{
    //     type:String,
    //    required:true
    //    }
});

module.exports = mongoose.model("Employee", employeeSchema );