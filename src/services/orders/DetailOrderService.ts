import prismaClient from "../../prisma";

interface DetailOrderRequest {
    order_id: string;
}

class DetailOrderService {
    async execute({ order_id }: DetailOrderRequest) {

        const order = await prismaClient.item.findFirst({
            where: {
                order_id: order_id,
            },
            include: {
                order: true,
                product: true,
            }
        })

        return order;

    }
}

export { DetailOrderService };