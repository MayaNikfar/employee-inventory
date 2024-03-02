const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
     fullName:{
        type: String,
        required: true
    },
    employeeId:{
        type: Number,
        unique: true,
        required: true
    }
    // email:{
    //     type: email,
    //     required: true
    // },
    // contactNumber:{
    //     type: Number,
    //     required: true
    // }
},{
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Employee', employeeSchema);