//import { models } from '../common/sequelize/init.sequelize.js';

const orderService = {
    addOrder: async (req) => {
        const { userId, restaurantId, dish, quantity } = req.body;
        return await models.order.create({ userId, restaurantId, dish, quantity });
    },

    getOrdersByUser:  async (req) => {
        const userId = req.params.id;
        return await models.order.findAll({ where: { userId } });
    },

    getOrdersByRestaurant: async (req) => {
        const restaurantId = req.params.id;
        return await models.order.findAll({ where: { restaurantId } });
    },
};

export default orderService;