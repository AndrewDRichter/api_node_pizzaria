import { Request, Response } from "express";
import { ListCategoriesService } from "../../services/categories/ListCategoriesService";

class ListCategoriesController {
    async handle(req: Request, res: Response) {

        const { filter } = req.body;

        const listCategoriesService = new ListCategoriesService()

        const categories = await listCategoriesService.execute({ filter })

        return res.json(categories)
    }
}

export { ListCategoriesController };