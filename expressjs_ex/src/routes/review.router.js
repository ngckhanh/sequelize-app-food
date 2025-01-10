import express from 'express';
import reviewController from '../controllers/review.controller.js';

const reviewRouter = express.Router();

reviewRouter.post('/', reviewController.addReview);
reviewRouter.get('/restaurants/:id', reviewController.getReviewsByRestaurant);
reviewRouter.get('/users/:id', reviewController.getReviewsByUser );

export default reviewRouter;