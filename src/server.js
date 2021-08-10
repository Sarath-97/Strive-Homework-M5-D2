import express from "express";
import authorRouter from "./services/Author/index.js";

const server = express()
const port = 3001

server.use("/author",authorRouter)


server.listen (port,() =>{
    console.log(`server listening on port: ${port}`);
})