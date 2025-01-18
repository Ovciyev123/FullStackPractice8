import { Router } from "express";
import { UserControllers } from "../Controllers/UserControllers.js";


export let route=new Router()


route.get("/",UserControllers.GetAll)
route.get("/:id",UserControllers.GetById)
route.delete("/:id",UserControllers.Deleteuser)
route.post("/",UserControllers.Postuser)
route.put("/:id",UserControllers.Updateuser)