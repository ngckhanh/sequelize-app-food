import express from "express";
//import Cars from "../models/Cars.model.js";
import likeController from "../controllers/like.controller.js";

const likeRouter = express.Router();

likeRouter.get(`/cars-list`, likeController.carList);

export default likeRouter;