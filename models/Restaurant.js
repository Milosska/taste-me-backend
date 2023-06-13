import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo_URL: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    current_discount_percent: {
      type: Number,
    },
    open_time: {
      type: String,
      required: true,
    },
    close_time: {
      type: String,
      required: true,
    },
    background_URL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Restaurant = model("restaurant", schema);

export default Restaurant;
