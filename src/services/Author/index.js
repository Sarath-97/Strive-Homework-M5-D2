import express from "express"
import  { fileURLToPath }  from "url"
import { dirname,join } from "path"
import fs, { readFileSync } from "fs" //this is to intract to file system
import uniqid from "uniqid"



const authorRouter = express.Router()

//finding the full path of this file
const currentFilePath = fileURLToPath(import.meta.url)

//finding the folder path of this file
const currentDirPath = dirname(currentFilePath)

//join folder path with author.json

const authorJSONpath = join(currentDirPath,"../../data/author.json")

authorRouter.post("/",(request, response)=>{

    try {
//*************Another way of doing it if you want it in a certain order*********** */
    /*   const {name, surname, email, dateOfBirth} = request.body

    const author = {
        id : uniqid(),
        name,
        surname,
        email,
        dateOfBirth,
        avatar: `https://ui-avatars.com/api/?name=${name}+${surname}`,
        createdAt : new Date(),
        updatedAt: new Date(), 
    } */

    const author = {id: uniqid(),...request.body, createdAt: new Date(),updatedAt: new Date()}

    const fileContent = fs.readFileSync(authorJSONpath)

    const fileAsString =fileContent.toString()

    const fileAsJSONArray = JSON.parse(fileAsString)

    fileAsJSONArray.push(author)

    fs.writeFileSync(authorJSONpath, JSON.stringify(fileAsJSONArray))

    response.send(author)

    } catch (error) {
        response.send({message:error.message})
    }
    
})

authorRouter.get("/",(request, response)=>{

    //Reading Author.json file
    const fileContent = fs.readFileSync(authorJSONpath)

    //Sending response to postman 
    response.send(JSON.parse(fileContent)) //JSON.parse converts the buffer to readable content
})



authorRouter.get("/:id",(request, response)=>{
try {
    const authors = JSON.parse(fs.readFileSync(authorJSONpath))

    console.log("student ID: ", request.params.id);

    const author = authors.find(a => a.id === request.params.id )

    response.send(author)
} catch (error) {
    
    response.send({message:error.message})
}
    
})

authorRouter.put("/:id",(request, response)=>{

    const authors = JSON.parse(fs.readFileSync(authorJSONpath))

    const remainingAuthors = authors.filter(a => a.id !== request.params.id)

    const  updatedAuthors = {...request.body,id: request.params.id}

    remainingAuthors.push(updatedAuthors)

    fs.writeFileSync(authorJSONpath, JSON.stringify(remainingAuthors))

    response.send(updatedAuthors) 

})

authorRouter.delete("/:id",(request, response)=>{
    const authors = JSON.parse(fs.readFileSync(authorJSONpath))

    const remainingAuthors = authors.filter(a => a.id !== request.params.id)

    fs.writeFileSync(authorJSONpath, JSON.stringify(remainingAuthors))

    response.status(204).send()
})




export default authorRouter