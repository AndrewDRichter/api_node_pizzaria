import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { CreateCategoryController } from "./controllers/categories/CreateCategoryController";
import { ListCategoriesController } from "./controllers/categories/ListCategoriesController";
import { CreateProductController } from "./controllers/products/CreateProductController";


import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// -- User routes --
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/profile', isAuthenticated, new DetailUserController().handle)

// -- Category routes --
router.post('/categories', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new ListCategoriesController().handle)

// -- Product routes --
router.post('/products', isAuthenticated, new CreateProductController().handle)

export { router };