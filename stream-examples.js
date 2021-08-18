import request from "request"
import { pipeline } from "stream"
import fs from "fs"

/* ********* STREAMING DATA TO NEW JSON FILE************* */
// const source = fs.createReadStream("./src/data/books.json")
// const desitnation = fs.createWriteStream("stream.json")

// pipeline(source,desitnation, err => {
//     if(err) console.log(err);
//     console.log("Stream successsful");
// })

import { createGzip } from "zlib"
/* ********* tRANSFORMING FILE TO ANOTHER FILE EXTENSION TO NEW JSON FILE************* */

const source =fs.createReadStream("./src/data/author.json")
const desitnation= fs.createWriteStream("author.json.gz")
const transform = createGzip()
pipeline(source, transform,desitnation, err =>{
    if(err)console.log(err);
    console.log("Successfully transformed and ended");
})