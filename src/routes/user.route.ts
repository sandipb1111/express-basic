import { Router } from "express"
import { postUsers } from "../controlles/users.controller"
const router = Router()

router.get("/", (req, res, next) => {
    res.send("Hello")
})

router.post("/", postUsers)

export default router
