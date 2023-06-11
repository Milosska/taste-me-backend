import catchAsyncWrapper from "../utils/catchAsyncWrapper.js";
import { getCitiesService } from "../services/citiesService.js";

export const getCities = catchAsyncWrapper(async (req, res, next) => {
  const cities = await getCitiesService();
  res.status(200).json(cities);
});
