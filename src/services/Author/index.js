import express from "express"
import  { fileURLToPath }  from "url"
import { dirname,join } from "path"
import fs from "fs" //this is to intract to file system

const authorRouter = express.Router()

//finding the full path of this file
const currentFilePath = fileURLToPath(import.meta.url)

//finding the folder path of this file
const currentDirPath = dirname(currentFilePath)

//join folder path with author.json

const authorJSONpath = join(currentDirPath,"Author.json")

authorRouter.post("/",(request, response)=>{

})

authorRouter.get("/",(request, response)=>{

    //Reading Author.json file
    const fileContent = fs.readFileSync(authorJSONpath)
    
    console.log(fileContent.toString());
    //Sending response to postman 
    response.send(JSON.parse(fileContent))
})

authorRouter.get("/:id",(request, response)=>{
    response.send("hello boii")
})

authorRouter.put("/:id",(request, response)=>{

})

authorRouter.delete("/:id",(request, response)=>{

})




export default authorRouter