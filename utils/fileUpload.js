import multer from "multer";
import path from "path";
import HttpError from "./HttpError.js";

const destination = path.resolve("temp");

const storage = multer.diskStorage({
  destination,
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    const newName = `${uniquePrefix}_${file.originalname}`;
    cb(null, newName);
  },
});

const limits = {
  fileSize: 1024 * 1024,
};

const fileFilter = (req, file, cb) => {
  const { mimetype } = file;
  if (
    mimetype === "image/jpg" ||
    mimetype === "image/jpeg" ||
    mimetype === "image/png"
  ) {
    return cb(null, true);
  }

  return cb(new HttpError(400, "File extension should be .jpg or .png"));
};

const fileUpload = multer({ storage, limits, fileFilter });

export default fileUpload;
