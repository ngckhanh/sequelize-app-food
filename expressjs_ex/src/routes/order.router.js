import express from 'express';
import orderController from '../controllers/order.controller.js';

const orderRouter = express.Router();

orderRouter.post('/', orderController.addOrder);
orderRouter.get('/users/:id', orderController.getOrdersByUser );
orderRouter.get('/restaurants/:id', orderController.getOrdersByRestaurant);

export default orderRouter;