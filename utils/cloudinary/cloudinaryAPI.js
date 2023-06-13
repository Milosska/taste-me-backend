import Cloudinary from "./cloudinaryConfig.js";
import HttpError from "../HttpError.js";
import fs from "fs";

export const cloudinaryImgSave = async (file, params, destFolder) => {
  const { path: oldPath, filename } = file[0];

  Cloudinary.url(filename, params);

  const fileData = await Cloudinary.v2.uploader.upload(oldPath, {
    folder: `taste_me/${destFolder}`,
    use_filename: true,
  });

  fs.unlink(oldPath, (err) => {
    if (err) {
      throw new HttpError(500, "Server can not delete the temp file");
    }
  });

  return fileData;
};
