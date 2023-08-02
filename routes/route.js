import express,{ Router } from "express";
import { adduserdata,getUsers,getUser,edituserdata,deleteuser} from "../controller/user-controller.js";


const router =express.Router();

router.post("/adduser",adduserdata);
router.get("/cruduser",getUsers);
router.get("/:id",getUser);
router.post("/:id",edituserdata);
router.delete("/:id",deleteuser);
export default router;