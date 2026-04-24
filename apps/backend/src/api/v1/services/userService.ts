import { User } from "@prisma/client";
import prisma from "../../../../prisma/client";

export const getUserById = async(id: string): Promise<User|null> => {
    const user: User | null = await prisma.user.findUnique(
        {
            where: {
                userId: id
            }
        }
    );

    if (!user) {
        return null;
    } else {
        return user;
    }
}

export const createUser = async(userData: { userId: string }): Promise<User> => {
    const newUser = await prisma.user.create({
        data: {
            userId: userData.userId,
            userName: userData.userId
        }
    });

    return newUser;
}

