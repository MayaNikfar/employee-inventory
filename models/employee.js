const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema({
     name:{
        type: String,
        required: true
    },
    employeeId:{
        type: Number,
        unique: true,
        required: true,
    },
    jobTitle:{
        type: String,
        enum: ['CEO', 'CTO', 'manager', 'assistant']
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    contactNumber:{
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      selectEnts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Entitlement'
        }
      ],
      userName: String,
      userAvatar: String
    }, {
      timestamps: true
    });

// Compile the schema into a model and export it
module.exports = mongoose.model('Employee', employeeSchema);