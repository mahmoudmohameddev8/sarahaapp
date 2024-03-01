import Joi from "joi";

export const signupSchema = Joi.object({
  /////validation///////////
  email: Joi.string().email().required(),
  age: Joi.number().min(18).max(70).messages({
    "number.min": "age must be between 18 and 70",
    "number.max": "age must be between 18 and 70",
  }),

  name: Joi.string().min(5).max(20).required().messages({
    "string.min": "name must be between 5 and 20",
    "string.max": "name must be between 5and 20",
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  confirmpassword: Joi.string().valid(Joi.ref("password")).required(),
}).required();

export const loginSchema = Joi.object({
  /////validation///////////
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
