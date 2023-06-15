import catchAsyncWrapper from "../utils/catchAsyncWrapper.js";
import { getFoodsService, addFoodService } from "../services/foodsService.js";

export const getFoods = catchAsyncWrapper(async (req, res, next) => {
  const { restaurantId } = req.params;
  const foods = await getFoodsService(restaurantId, req.query);
  res.status(200).json(foods);
});

export const addFood = catchAsyncWrapper(async (req, res, next) => {
  const newFood = await addFoodService(req.file, req.body);
  res.status(201).json(newFood);
});
