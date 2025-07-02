import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";


import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// -- Users routes --
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/profile', isAuthenticated, new DetailUserController().handle)

export { router };