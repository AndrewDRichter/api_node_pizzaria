import prismaClient from "../../prisma";

interface queryRequest {
    filter: string;
}

class ListCategoriesService {
    async execute({ filter }: queryRequest) {

        const categories = await prismaClient.category.findMany({
            where: {
                name: {
                    contains: filter ? filter : ''
                }
            },
            select: {
                id: true,
                name: true
            },
            orderBy: {
                name: "asc"
            }
        })

        return categories

    }
}

export { ListCategoriesService };