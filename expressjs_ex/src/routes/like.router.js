import express from 'express';
import likeController from '../controllers/like.controller.js';

const likeRouter = express.Router();

likeRouter.post('/', likeController.addLike);
likeRouter.delete('/', likeController.removeLike);
likeRouter.get('/restaurants/:id', likeController.getLikesByRestaurant);
likeRouter.get('/users/:id', likeController.getLikesByUser );

export default likeRouter;