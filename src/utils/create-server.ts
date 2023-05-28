import { config } from "dotenv"
import cors from "cors"
import express, { Request, Response } from "express"
import crypto from "crypto"
import userRouter from "../routes/user.route"

config()

const app = express()
app.use(cors())
app.use("/users", userRouter)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app
