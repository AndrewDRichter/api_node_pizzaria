import prismaClient from "../../prisma";

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

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: password
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