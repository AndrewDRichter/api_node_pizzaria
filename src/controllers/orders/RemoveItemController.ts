import { Request, Response } from "express";
import { RemoveItemService } from "../../services/orders/RemoveItemService";

class RemoveItemController {
    async handle(req: Request, res: Response) {

        const { item_id } = req.body;

        const removeItemService = new RemoveItemService();

        const item = await removeItemService.execute({ item_id });

        return res.json(item);

    }
}

export { RemoveItemController };