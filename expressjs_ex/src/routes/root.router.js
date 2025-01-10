import express from 'express'
import reviewRouter from './review.router.js'
import likeRouter from './like.router.js';
import orderRouter from './order.router.js';

const rootRouter = express.Router()


rootRouter.get(`/`, (request, response, next) => {
   response.json(`ok`);
});

rootRouter.use('/review', reviewRouter)
rootRouter.use(`/order`, orderRouter)
rootRouter.use(`/like`, likeRouter)



export default rootRouter