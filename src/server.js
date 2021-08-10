import express from "express";
import listEndpoints from "express-list-endpoints";
import authorRouter from "./services/Author/index.js";

const server = express()
const port = 3001

server.use("/author",authorRouter)

console.table(listEndpoints(server))

server.listen (port,() =>{
    console.log(`server listening on port: ${port}`);
})