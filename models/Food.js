import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "restaurant",
      required: true,
    },
    type: {
      type: String,
      enum: [
        "beverage",
        "burger",
        "pizza",
        "sandwich",
        "chicken",
        "salad",
        "dessert",
        "sauce",
        "other",
      ],
      required: true,
    },
    cuisine: {
      type: String,
      enum: ["American", "Italian", "Mexican"],
    },
    imgURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Food = model("food", schema);
export default Food;
