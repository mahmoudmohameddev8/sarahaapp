import { Types } from "mongoose";

export const objectIdvalidation = (value, helper) => {
  if (Types.ObjectId.isValid(value)) return true;
  return helper.message("invaild objectid");
};

export const validation = (schema) => {
  return (req, res, next) => {
    const data = { ...req.body, ...req.params, ...req.headers };
    const validationResult = schema.validate(data, {
      abourtEarly: false,
    });
    if (validationResult.error) {
      const erorrmessage = validationResult.error.details.map((obj) => {
        return obj.message;
      });
      return next(new Error(erorrmessage));
    }
    return next();
  };
};
