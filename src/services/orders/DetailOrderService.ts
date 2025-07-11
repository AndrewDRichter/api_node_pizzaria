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
                Order: true,
                Product: true,
            }
        })

        return order;

    }
}

export { DetailOrderService };