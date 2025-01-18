import { model, Schema } from "mongoose";





const UserShema=new Schema({

    name:String,
    work:String,
    salary:Number,
    image:String
})




export const UserModel=model("users",UserShema)