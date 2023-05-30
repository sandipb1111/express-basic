import { config } from "dotenv"
import cors from "cors"
import express, { Request, Response } from "express"
import crypto from "crypto"
import router from "../routes/index"
config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", router)


export default app
