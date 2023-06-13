import HttpError from "./HttpError.js";

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      next(new HttpError(422, `${error}`));
      return;
    }

    next();
  };
};

export default validateBody;
