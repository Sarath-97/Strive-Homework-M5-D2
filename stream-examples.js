import request from "request"
import { pipeline } from "stream"
import fs from "fs"

const source = fs.createReadStream("./src/data/books.json")
const desitnation = process.stdout

pipeline(source,desitnation, err => {
    if(err) console.log(err);
    console.log("Stream successsful");
})
