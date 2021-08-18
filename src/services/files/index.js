import express from "express"
import multer from "multer"
import fs from "fs"
import { pipeline } from "stream"

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

fileRouter.get("/download", async (req, res, next) => {
    try {
        //source and destination

        res.setHeader("content-Dipositon", "attachment; filename = author.json")
        const source = fs.createReadStream("./src/data/author.json")
        const destination = res

        pipeline(source, destination , err => {

            if(err) next(err);
        })

        } catch (error) {
        next(error)
    }
})

export default fileRouter