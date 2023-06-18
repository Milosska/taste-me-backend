import catchAsyncWrapper from "../utils/catchAsyncWrapper.js";
import {
  getFoodsService,
  addFoodService,
  updateFoodsService,
} from "../services/foodsService.js";

export const getFoods = catchAsyncWrapper(async (req, res, next) => {
  const { restaurantName } = req.params;
  const foods = await getFoodsService(restaurantName, req.query);
  res.status(200).json(foods);
});

export const addFood = catchAsyncWrapper(async (req, res, next) => {
  const newFood = await addFoodService(req.file, req.body);
  res.status(201).json(newFood);
});

export const updateFoods = catchAsyncWrapper(async (req, res, next) => {
  const { restaurantId } = req.params;
  const updatedoods = await updateFoodsService(restaurantId);
  res.status(200).json(updatedoods);
});
