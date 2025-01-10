import { models } from '../common/sequelize/init.sequelize.js';

const likeService = {
    addLike: async (req) => {
        const { userId, restaurantId } = req.body;
        return await models.like.create({ userId, restaurantId });
    },

    removeLike: async (req) => {
        const { userId, restaurantId } = req.body;
        await models.like.destroy({ where: { userId, restaurantId } });
    },

    getLikesByRestaurant: async (req) => {
        const restaurantId = req.params.id;
        return await models.like.findAll({ where: { restaurantId } });
    },

    getLikesByUser:  async (req) => {
        const userId = req.params.id;
        return await models.like.findAll({ where: { userId } });
    },
};

export default likeService;