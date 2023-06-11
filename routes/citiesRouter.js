import express from "express";
import { getCities } from "../controllers/citiesController.js";

export const router = express.Router();

router.route("/").get(getCities);
