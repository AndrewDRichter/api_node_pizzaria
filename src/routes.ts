import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";

const router = Router();

// -- Users routes --
router.post('/users', new CreateUserController().handle)

export { router };