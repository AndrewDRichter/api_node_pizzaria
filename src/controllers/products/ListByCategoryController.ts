import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/products/ListByCategoryService";

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const { category_id } = req.body;

        const listByCategoryService = new ListByCategoryService();

        const products = await listByCategoryService.execute({ category_id });

        return res.json(products);
    }
}

export { ListByCategoryController };