import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js";

const { DB_HOST, PORT } = process.env;

(async () => {
  await mongoose
    .connect(DB_HOST)
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is up and running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
})();
