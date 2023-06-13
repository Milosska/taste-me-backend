import Joi from "joi";

export const createRestaurantValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "field 'name' is missing",
  }),
  rating: Joi.number().required().messages({
    "any.required": "field 'rating' is missing",
  }),
  current_discount_percent: Joi.number(),
  open_time: Joi.string().required().messages({
    "any.required": "field 'open_time' is missing",
  }),
  close_time: Joi.string().required().messages({
    "any.required": "field 'close_time' is missing",
  }),
});
