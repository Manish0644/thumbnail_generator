import { Request,Response } from "express"
import Thumbnail from "../models/Thumbnail.js";


// Controllers to get all User Thumbnails

export const getUsersThumbnails = async (req:Request,res:Response)=>{
    try{
        const {userId} = req.session;

        const thumbnails = await Thumbnail.find({userId}).sort({createdAt:-1})
        res.json({thumbnails})
    }
    catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}


// controllers to get single Thumbnail of a User
export const getThumbnailbyId = async (req:Request,res:Response)=>{
    try{
        const {userId} = req.session;
        const {id} = req.params;

        const thumbnail= await Thumbnail.findOne({userId,_id:id});
        res.json({thumbnail});
    }
    catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
    }
}



