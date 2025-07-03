import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { CreateCategoryController } from "./controllers/categories/CreateCategoryController";
import { ListCategoriesController } from "./controllers/categories/ListCategoriesController";
import { CreateProductController } from "./controllers/products/CreateProductController";
import { ListByCategoryController } from "./controllers/products/ListByCategoryController";
import { CreateOrderController } from "./controllers/orders/CreateOrderController";
import { RemoveOrderController } from "./controllers/orders/RemoveOrderController";


import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// -- User routes --
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/profile', isAuthenticated, new DetailUserController().handle)

// -- Category routes --
router.post('/categories', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new ListCategoriesController().handle)

// -- Product routes --
router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/products', isAuthenticated, new ListByCategoryController().handle)

// -- Order routes --
router.post('/orders', isAuthenticated, new CreateOrderController().handle)
router.delete('/orders', isAuthenticated, new RemoveOrderController().handle)

export { router };