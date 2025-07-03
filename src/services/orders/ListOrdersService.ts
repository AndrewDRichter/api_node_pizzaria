import prismaClient from "../../prisma";


class ListOrdersService {
    async execute() {

        const orders = await prismaClient.order.findMany({
            where: {
                status: false,
                draft: false,
            },
            select: {
                id: true,
                table: true,
                name: true,
                items: true,
            },
            orderBy: {
                created_at: "desc",
            }
        })

        return orders;

    }
}

export { ListOrdersService };