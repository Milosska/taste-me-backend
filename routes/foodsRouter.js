import express from "express";
import validateBody from "../utils/validateBody.js";
import fileUpload from "../utils/fileUpload.js";
import { createFoodValidationSchema } from "../utils/validation/foodValidationSchema.js";
import { getFoods, addFood } from "../controllers/foodsController.js";

export const router = express.Router();

router
  .route("/")
  .post(
    fileUpload.single("image"),
    validateBody(createFoodValidationSchema),
    addFood
  );

router.route("/:restaurantId").get(getFoods);
