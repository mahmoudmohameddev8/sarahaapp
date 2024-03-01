import Joi from "joi";
import bcyrptjs from "bcryptjs";
import { User } from "../../../DB/models/user.model.js";
import Jwt from "jsonwebtoken";
import { Token } from "../../../DB/models/token.model.js";
import { asyncHandelrs } from "../../utils/asyncHandlers.js";

export const signup = async (req, res, next) => {
  //const signupSchema =

  const hashPassword = bcyrptjs.hashSync(req.body.password);
  //////crate user////////
  const user = await User.create({ ...req.body, password: hashPassword });
  return res.json({ sucess: true, message: "signup succesfully" });
};
//////check user///////
export const login = asyncHandelrs(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new Error("user not found!", { cause: 404 }));
  ///////////check password//////////
  const match = bcyrptjs.compareSync(req.body.password, user.password);
  if (!match) return next(new Error("password not match"), { cause: 401 });

  ////////token//////////////////
  const token = Jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.SECRET_KEY
  );
  await Token.create({ token, user: user._id });
  return res.json({ sucess: true, results: { token } });
});
