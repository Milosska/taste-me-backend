import Joi from "joi";

const foodTypes = [
  "beverage",
  "burger",
  "pizza",
  "sushi",
  "sandwich",
  "chicken",
  "salad",
  "soup",
  "dessert",
  "sauce",
  "other",
];
const cuisines = ["American", "Italian", "Japanese", "Middle Eastern"];

export const createFoodValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "field 'name' is missing",
  }),
  price: Joi.number().precision(2).required().messages({
    "any.required": "field 'price' is missing",
    "number.precision": "'price' field must have no more than 2 decimal places",
  }),
  restaurant: Joi.string().alphanum().length(24).required().messages({
    "any.required": "field 'restaurant' is missing",
    "string.alphanum": "{{#label}} must only contain alpha-numeric characters",
    "string.length": "{{#label}} length must be {{#limit}} characters long",
  }),
  type: Joi.string()
    .valid(...foodTypes)
    .required()
    .messages({
      "any.required": "field 'type' is missing",
      "any.invalid": "{{#label}} contains an invalid value",
    }),
  cuisine: Joi.string()
    .valid(...cuisines)
    .messages({
      "any.invalid": "{{#label}} contains an invalid value",
    }),
});
