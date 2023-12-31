import express from "express";
import cors from "cors";
import { router as citiesRouter } from "./routes/citiesRouter.js";
import { router as restaurantsRouter } from "./routes/restaurantsRouter.js";
import { router as foodsRouter } from "./routes/foodsRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cities", citiesRouter);
app.use("/api/restaurants", restaurantsRouter);
app.use("/api/foods", foodsRouter);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode || 500).json({
    message: error.message || "Something went wrong. Please, try again later",
  });
});

export default app;
