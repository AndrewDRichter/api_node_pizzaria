import prismaClient from "../../prisma";

interface SendOrderRequest {
    order_id: string;
}

class SendOrderService {
    async execute({ order_id }: SendOrderRequest) {

        const order = await prismaClient.order.update({
            data: {
                draft: false,
            },
            where: {
                id: order_id,
            }
        })

        return order;

    }
}

export { SendOrderService };