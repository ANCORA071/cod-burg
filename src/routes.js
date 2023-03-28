import { Router } from 'express';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import Multer from 'multer';
import multerconfig from './config/multer'
import authMiddleware from './app/middlewares/auth';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();
const upload = new Multer(multerconfig)




routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// será chamado por todas as rotas abaixo
routes.use(authMiddleware)  

routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products',  ProductController.index);
routes.put('/products/:id', upload.single('file'), ProductController.update);
routes.delete('/products/:id', ProductController.delete);

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories',  CategoryController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

routes.post('/orders',  OrderController.store);
routes.get('/orders',  OrderController.index);
routes.put('/orders/:id',  OrderController.update);
routes.delete('/orders/:id',  OrderController.delete);

export default routes;
