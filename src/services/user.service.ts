import { PrismaClient } from "@prisma/client"
import { randomUUID } from "crypto"
import { Response } from "express"

const prisma = new PrismaClient()

export const createPost = async (user: any) => {
    const { name, address, email } = user
    const users = await prisma.user.create({
        data: {
            name,
            address,
            email,
            id: 323,
        },
    })
    return users
}
