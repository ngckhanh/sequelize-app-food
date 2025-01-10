import { models } from '../common/sequelize/init.sequelize.js';

const reviewService = {
    addReview: async (req) => {
        const { userId, restaurantId, rating, comment } = req.body;
        return await models.review.create({ userId, restaurantId, rating, comment });
    },

    getReviewsByRestaurant: async (req) => {
        const restaurantId = req.params.id;
        return await models.review.findAll({ where: { restaurantId } });
    },

    getReviewsByUser:  async (req) => {
        const userId = req.params.id;
        return await models.review.findAll({ where: { userId } });
    },
};

export default reviewService;