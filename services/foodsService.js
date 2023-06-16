import Food from "../models/Food.js";
import Restaurant from "../models/Restaurant.js";
import { cloudinaryImgSave } from "../utils/cloudinary/cloudinaryAPI.js";
import HttpError from "../utils/HttpError.js";

export const getFoodsService = async (restaurantId, query) => {
  const foods = await Food.find(
    { restaurant: restaurantId },
    "-createdAt -updatedAt"
  ).populate("restaurant", "-createdAt -updatedAt");

  return foods;
};

export const addFoodService = async (file, data) => {
  const { restaurant, name } = data;

  const restaurantInBase = await Restaurant.findById(restaurant);
  if (!restaurantInBase) {
    throw new HttpError(404, "Restaurant is not found");
  }

  const fetchedFood = await Food.findOne({ name, restaurant });
  if (fetchedFood) {
    throw new HttpError(409, "The food is already in the base");
  }

  const foodImg = await cloudinaryImgSave(file, { width: 500 }, "foods");

  const newFood = await Food.create({
    ...data,
    imgURL: foodImg.public_id,
  });

  return newFood;
};
