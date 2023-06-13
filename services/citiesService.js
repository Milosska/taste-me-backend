import City from "../models/City.js";

export const getCitiesService = async () => {
  return await City.find({}, "-createdAt -updatedAt");
};
