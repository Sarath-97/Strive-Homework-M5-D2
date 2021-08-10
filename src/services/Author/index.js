import express from "express"

const authorRouter = express.Router()

authorRouter.post("/author")

authorRouter.get("/author")

authorRouter.get("/authors/123")

authorRouter.put("/authors/123")

authorRouter.delete("/authors/123")




export default authorRouter