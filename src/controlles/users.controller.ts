import { Request, Response, NextFunction } from "express"
import * as UserService from "../services/user.service"

export const postUsers = (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = UserService.createPost(req.body)
        console.log(data)
        res.send(data)
    } catch (error) {
        next(error)
    }
}
