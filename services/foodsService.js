import Food from "../models/Food.js";
import Restaurant from "../models/Restaurant.js";
import { cloudinaryImgSave } from "../utils/cloudinary/cloudinaryAPI.js";
import HttpError from "../utils/HttpError.js";

export const getFoodsService = async (restaurantName, query) => {
  const { page = 1, limit = 5 } = query;
  const skip = (page - 1) * limit;

  const foods = await Food.find(
    { restaurant: restaurantName },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("restaurantData", "-createdAt -updatedAt");

  const totalFetchedDocsCount = await Food.aggregate()
    .match({
      restaurant: { $eq: restaurantName },
    })
    .count("totalCount");

  return { results: foods, totalCount: totalFetchedDocsCount[0].totalCount };
};

export const addFoodService = async (file, data) => {
  const { restaurant, name } = data;

  const restaurantInBase = await Restaurant.findOne({ name: restaurant });
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

export const updateFoodsService = async (restaurantId) => {
  const restaurantInBase = await Restaurant.findById(restaurantId);
  if (!restaurantInBase) {
    throw new HttpError(404, "Restaurant is not found");
  }

  const updatedFoods = await Food.updateMany(
    { restaurant: restaurantId },
    { $set: { restaurant: restaurantInBase.name } }
  );

  return updatedFoods;
};
