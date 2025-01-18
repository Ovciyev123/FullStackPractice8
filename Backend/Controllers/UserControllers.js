import { UserModel } from "../Models/Usermodel.js"




export const UserControllers={

    GetAll:async (req,res)=>{

        let users= await UserModel.find()

        res.send(users)
    },
    GetById:async (req,res)=>{

        let {id}=req.params

        let user=await UserModel.findById(id)

        res.send({
            message:"success GetById",
            data:user
        })
    },
    Deleteuser:async (req,res)=>{

        let {id}=req.params

        await UserModel.findByIdAndDelete(id)

        res.send({
            message:"success Delete",
            
        })
    },
    Postuser:async (req,res)=>{

        let postuser=await UserModel(req.body)

        await postuser.save()

        res.send({

            message:"success post",
            data:postuser
        })
    },
    Updateuser:async (req,res)=>{

        let {id}=req.params

        let updateuser=req.body

        let updateduser=await UserModel.findByIdAndUpdate({_id:id},updateuser,{new:true})

        res.send({
            message:"success Update",
            data:updateduser
        })
    }



}