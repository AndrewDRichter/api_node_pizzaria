import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        
        // Check if email was sent
        if(!email){
            throw new Error('Email incorrect.')
        }

        // Check if email is already registrated
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error('User with this email already registered.')
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService };