import express from "express";
import cors from "cors"
import listEndpoints from "express-list-endpoints";
import authorRouter from "./services/Author/index.js";
import bookRouter from "./services/books/index.js";
import fileRouter from "./services/files/index.js";
import userRouter from "./services/users/index.js";

const server = express()
const PORT = process.env.PORT

server.use(cors())
server.use(express.json())


//**********ROUTES********** */

server.use("/author",authorRouter)
server.use("/books",bookRouter)
server.use("/files", fileRouter)
server.use("/users",userRouter)

console.table(listEndpoints(server))

server.listen (PORT,() =>{
    console.log(`server listening on port: ${process.env.PORT}`);
})