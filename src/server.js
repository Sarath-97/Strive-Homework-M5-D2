import express from "express";
import cors from "cors"
import listEndpoints from "express-list-endpoints";
import authorRouter from "./services/Author/index.js";
import bookRouter from "./services/books/index.js";

const server = express()
const port = 3001

server.use(cors())
server.use(express.json())

//**********ROUTES********** */

server.use("/author",authorRouter)
server.use("/books",bookRouter)

console.table(listEndpoints(server))

server.listen (port,() =>{
    console.log(`server listening on port: ${port}`);
})