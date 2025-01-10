import { responseError, responseSuccess } from "../common/helpers/response.helper.js";
import likeService from "../services/like.service.js";

const likeController = {
  likeRestaurant: async (req, res, next) => {
    try {
      const like = await likeService.likeRestaurantService(req); // Gọi service xử lý logic
      const resData = responseSuccess(like, `Liked restaurant successfully`, 201); // Tạo response thành công
      res.status(resData.code).json(resData); // Trả về JSON response
    } catch (error) {
      next(responseError(error.message, 400)); // Trả lỗi qua middleware
    }
  },

  unlikeRestaurant: async (req, res, next) => {
    try {
      const message = await likeService.unlikeRestaurantService(req);
      const resData = responseSuccess(message, `Unliked restaurant successfully`, 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(responseError(error.message, 400));
    }
  },

  getLikesByRestaurant: async (req, res, next) => {
    try {
      const likes = await likeService.getLikesByRestaurantService(req);
      const resData = responseSuccess(likes, `Fetched likes for restaurant successfully`, 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(responseError(error.message, 500));
    }
  },

  getLikesByUser: async (req, res, next) => {
    try {
      const likes = await likeService.getLikesByUserService(req);
      const resData = responseSuccess(likes, `Fetched likes for user successfully`, 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(responseError(error.message, 500));
    }
  },
};

export default likeController;
