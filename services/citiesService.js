import City from "../models/City.js";
import HttpError from "../utils/HttpError.js";

export const getCitiesService = async () => {
  return await City.find({}, "-createdAt -updatedAt");
};
