import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/orders/RemoveOrderService";

class RemoveOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;

        const removeOrderService = new RemoveOrderService();

        const order = await removeOrderService.execute({ order_id });

        return res.json(order);

    }
}

export { RemoveOrderController };
