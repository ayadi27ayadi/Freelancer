import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
        min:3,
        max: 20,
        unique: true,
    },
lastName:{
        type: String,
        require: true,
        min:3,
        max: 20,
        unique: true,
    },
  email: {
    type: String,
    
  },
  phoneNumber: {
    type: String,
    
  },
  password: { type: String, },
  freelancerUser: { type: Boolean,default: false },
  verified: {type: Boolean, default: false, },
},
{
    timestamps: true,
  }
);

export default  mongoose.model('User', userSchema )


