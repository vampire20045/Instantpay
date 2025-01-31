import mongoose  from "mongoose";
const UserSchema=new mongoose.Schema({
    First_name:{type:String,required:true},
    Last_name:{type:String,required:true},
    password:{type:String, required:true},
    Username:{type:String,required:true}

});
const User=mongoose.model("User",UserSchema);
export default User;