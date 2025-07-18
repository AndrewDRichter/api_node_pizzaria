import prismaClient from "../../prisma";

interface DetailOrderRequest {
    order_id: string;
}

class DetailOrderService {
    async execute({ order_id }: DetailOrderRequest) {

        console.log(`order_id: ${order_id}`)
        const order = await prismaClient.item.findMany({
            where: {
                order_id: order_id,
            },
            include: {
                Order: true,
                Product: true,
            }
        })

        console.log(order)
        return order;

    }
}

export { DetailOrderService };