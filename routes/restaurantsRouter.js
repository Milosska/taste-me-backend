import express from "express";
import validateBody from "../utils/validateBody.js";
import fileUpload from "../utils/fileUpload.js";
import { createRestaurantValidationSchema } from "../utils/validation/restaurantValidationSchemas.js";
import {
  getRestaurants,
  addRestaurant,
} from "../controllers/restaurantsController.js";

export const router = express.Router();

router
  .route("/")
  .get(getRestaurants)
  .post(
    fileUpload.fields([
      { name: "logo", maxCount: 1 },
      { name: "background", maxCount: 1 },
    ]),
    validateBody(createRestaurantValidationSchema),
    addRestaurant
  );
