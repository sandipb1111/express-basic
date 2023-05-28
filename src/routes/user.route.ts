import { Router } from "express"
const router = Router()

router.get("/", (req, res, next) => {
    console.log("username: ")
    res.send("ID: its just a demo")
})

export default router
