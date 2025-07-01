import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";

const router = Router();

// -- Users routes --
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)

export { router };