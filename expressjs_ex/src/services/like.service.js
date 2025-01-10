import { Like, User, Restaurant } from '../models'; 

const likeService = {
  likeRestaurantService: async (req) => {
    const { userId, restaurantId } = req.body;

    // Kiểm tra xem đã like chưa
    const existingLike = await Like.findOne({ where: { userId, restaurantId } });
    if (existingLike) throw new Error('You have already liked this restaurant.');

    // Tạo like mới
    return await Like.create({ userId, restaurantId });
  },

  unlikeRestaurantService: async (req) => {
    const { userId, restaurantId } = req.body;

    const result = await Like.destroy({ where: { userId, restaurantId } });
    if (!result) throw new Error('Like not found for this restaurant.');

    return 'Successfully unliked the restaurant.';
  },

  getLikesByRestaurantService: async (req) => {
    const { restaurantId } = req.params;

    return await Like.findAll({
      where: { restaurantId },
      include: [{ model: User, attributes: ['id', 'name'] }], // Thông tin user
    });
  },

  getLikesByUserService: async (req) => {
    const { userId } = req.params;

    return await Like.findAll({
      where: { userId },
      include: [{ model: Restaurant, attributes: ['id', 'name'] }], // Thông tin nhà hàng
    });
  },
};

export default likeService;
