import { Request, Response } from "express";
import { DetailUserService } from "../../services/users/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {
        const detailUserService = new DetailUserService();

        const userDetails = await detailUserService.execute();

        return res.json(userDetails)
    }
}

export { DetailUserController };