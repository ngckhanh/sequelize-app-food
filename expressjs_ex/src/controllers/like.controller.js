import { responseError, responseSuccess } from "../common/helpers/response.helper.js";
import likeService from "../services/like.service.js";

const likeController = {
    addLike: async (req, res, next) => {
        try {
            const like = await likeService.addLike(req);
            const resData = responseSuccess(like, "Like added successfully", 201);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },

    removeLike: async (req, res, next) => {
        try {
            await likeService.removeLike(req);
            const resData = responseSuccess(null, "Like removed successfully", 204);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },

    getLikesByRestaurant: async (req, res, next) => {
        try {
            const likes = await likeService.getLikesByRestaurant(req);
            const resData = responseSuccess(likes, "Fetched likes successfully", 200);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },

    getLikesByUser:  async (req, res, next) => {
        try {
            const likes = await likeService.getLikesByUser (req);
            const resData = responseSuccess(likes, "Fetched likes successfully", 200);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },
};

export default likeController;