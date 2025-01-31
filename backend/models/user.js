import mongoose, { Mongoose }  from "mongoose";
const UserSchema=new mongoose.Schema({
    First_name:{type:String,required:true},
    Last_name:{type:String,required:true},
    password:{type:String, required:true},
    Username:{type:String,required:true}

});
const AccountSchema=new mongoose.Schema({
    userId:{type:Mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    Balance:{type:Number,required:true}
})
const User=mongoose.model("User",UserSchema);
const Account=mongoose.model("Account",AccountSchema);
export {User,Account};