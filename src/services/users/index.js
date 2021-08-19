import express from "express"
import { sendMail } from "../../lib/email.js"

const userRouter = express.Router()

userRouter.post("/sendMail", async (req,res,next)=>{

    try {

        const {email} = req.body

    //send email

    await sendMail(email)

    //send proper response

    res.send("Email Sent!")
        
    } catch (error) {
        next(error)
    }
})

export default userRouter