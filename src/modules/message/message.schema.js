import Joi from "joi";
import { objectIdvalidation } from "../../middleware/validation.middlware.js";
export const sendmessageschema = Joi.object({
  content: Joi.string().min(10).max(100).required(),
  reciverID: Joi.custom(objectIdvalidation).required(),
}).required();
