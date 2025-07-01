import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        
        // Verify if email exists
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("Some information doesn't match.")
        }

        // Validate password
        const passwordMatches = await compare(password, user.password)

        if(!passwordMatches) {
            throw new Error("Some information doesn't match.")
        }
    
        

        return {ok : true}
    }
}

export { AuthUserService };