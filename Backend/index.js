import express from "express"
const app=express()
import cors from "cors"

app.use(cors())
app.use(express.json())

import "./Config/config.js"
import { route } from "./Router/UserRouter.js"


app.use("/users",route)

app.listen(3000,()=>{

    console.log("3000 protda dinlenilir");
    
})