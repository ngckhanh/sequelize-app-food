import { responseError, responseSuccess } from "../common/helpers/response.helper.js";
import orderService from "../services/order.service.js";

const orderController = {
    addOrder: async (req, res, next) => {
        try {
            const order = await orderService.addOrder(req);
            const resData = responseSuccess(order, "Order placed successfully", 201);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },

    getOrdersByUser:  async (req, res, next) => {
        try {
            const orders = await orderService.getOrdersByUser (req);
            const resData = responseSuccess(orders, "Fetched orders successfully", 200);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },

    getOrdersByRestaurant: async (req, res, next) => {
        try {
            const orders = await orderService.getOrdersByRestaurant(req);
            const resData = responseSuccess(orders, "Fetched orders successfully", 200);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },
};

export default orderController;