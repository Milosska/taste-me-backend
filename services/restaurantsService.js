import Restaurant from "../models/Restaurant.js";
import { cloudinaryImgSave } from "../utils/cloudinary/cloudinaryAPI.js";
import HttpError from "../utils/HttpError.js";

export const getRestaurantsService = async (query) => {
  const { page = 1, limit = 5 } = query;
  const skip = (page - 1) * limit;

  const restaurants = await Restaurant.find({}, "-createdAt -updatedAt", {
    skip,
    limit,
  });

  return restaurants;
};

export const addRestaurantService = async (files, data) => {
  const { name } = data;

  const fetchedRestaurant = await Restaurant.findOne({ name });
  if (fetchedRestaurant) {
    throw new HttpError(409, "The restaurant is already in the base");
  }

  const { logo, background } = files;
  const fileDataLogo = await cloudinaryImgSave(
    logo,
    { width: 200 },
    "restaurants/logo"
  );
  const fileDataBg = await cloudinaryImgSave(
    background,
    { width: 500 },
    "restaurants/background"
  );

  return await Restaurant.create({
    ...data,
    logo_URL: fileDataLogo.public_id,
    background_URL: fileDataBg.public_id,
  });
};
