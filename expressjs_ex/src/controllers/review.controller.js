import { responseError, responseSuccess } from "../common/helpers/response.helper.js";
import reviewService from "../services/review.service.js";

const reviewController = {
    addReview: async (req, res, next) => {
        try {
            const review = await reviewService.addReview(req);
            const resData = responseSuccess(review, "Review added successfully", 201);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },

    getReviewsByRestaurant: async (req, res, next) => {
        try {
            const reviews = await reviewService.getReviewsByRestaurant(req);
            const resData = responseSuccess(reviews, "Fetched reviews successfully", 200);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },

    getReviewsByUser:  async (req, res, next) => {
        try {
            const reviews = await reviewService.getReviewsByUser (req);
            const resData = responseSuccess(reviews, "Fetched reviews successfully", 200);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    },
};

export default reviewController;