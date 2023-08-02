 
import { response } from "express";
import usertable from "../schema/user-schema.js";

 export const adduserdata = async (req,res)=>{  //request ke use se api ke sath frontend se bheja jata hein and response ke use backed se frontend bhej sakte hein
   const data=req.body;
   const newuser=new usertable(data);

   try {
     await newuser.save();
     res.status(201).json(newuser);
   } catch (error) {
    res.status(409).json({message:error.message});
   }
 }

 export const getUsers= async (req,res)=>{
  try {
    const users= await usertable.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({message:error.message});

  }
 }

 export const getUser=async(req,res)=>{
  
  try {
    // these req.params.is also find using findbyid function
    // const user= await usertable.findById({userId:req.params.id});
    const user= await usertable.find({userId:req.params.id});
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({message:error.message});

  }
 }

 export const edituserdata = async (req,res)=>{  //request ke use se api ke sath frontend se bheja jata hein and response ke use backed se frontend bhej sakte hein
  const data=req.body;
  const edituser=new usertable(data);

  try {
    await usertable.updateOne({userId:req.params.id},edituser);
    res.status(201).json(newuser);
  } catch (error) {
   res.status(409).json({message:error.message});
  }
}

export const deleteuser=async(req,res)=>{
  try {
    await usertable.deleteOne({userId:req.params.id});
    res.status(200).json({message:"message delete successfully"});
  } catch (error) {
   res.status(404).json({message:error.message});
  }
}