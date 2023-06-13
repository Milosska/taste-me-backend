import catchAsyncWrapper from "../utils/catchAsyncWrapper.js";
import {
  getRestaurantsService,
  addRestaurantService,
} from "../services/restaurantsService.js";

export const getRestaurants = catchAsyncWrapper(async (req, res, next) => {
  const restaurants = await getRestaurantsService(req.query);
  res.status(200).json(restaurants);
});

export const addRestaurant = catchAsyncWrapper(async (req, res, next) => {
  const newRestaurant = await addRestaurantService(req.files, req.body);
  res.status(201).json(newRestaurant);
});
