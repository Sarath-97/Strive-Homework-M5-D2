import express from "express"
import multer from "multer"

const fileRouter = express.Router()

fileRouter.post("/uploadAvatar",multer().single("avatar"),async (req,res,next) =>{
    try {
        console.log(req.file);
        res.send("uploaded")
    } catch (error) {
        
    }
})

fileRouter.post("/uplaodMultiple", async (req,res,next) =>{
    try {
        
    } catch (error) {
        
    }
})



export default fileRouter