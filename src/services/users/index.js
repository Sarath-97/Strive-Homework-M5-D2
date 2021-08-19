import express from "express"
import { sendMail } from "../../lib/email.js"

const userRouter = express.Router()

userRouter.post("/sendmail", async (req,res,next)=>{
    const {email} = req.body

    //send email

    await sendMail(email)

    //send proper response

    res.send("Email Sent!")
})

export default userRouter