import { Token } from "../../DB/models/token.model.js";
import { asyncHandelrs } from "../utils/asyncHandlers.js";
import { User } from "../../DB/models/user.model.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = asyncHandelrs(async (req, res, next) => {
  let { token } = req.headers;

  if (!token) return next(new Error("token missed"), { cause: 400 });

  if (!token.startsWith(process.env.BARER_KEY))
    return next(new Error("invalid token!"), { cause: 401 });
  token = token.split(process.env.BARER_KEY)[1];
  const tokenDB = await Token.findOne({ token, isvalid: true });
  if (!tokenDB) return next(new Error("token expierd"), { cause: 400 });
  const payload = jwt.verify(token, process.env.SECRET_KEY);

  const isUser = await User.findById(payload.id);
  if (!isUser) return next(new Error("user not found"), { cause: 404 });

  return next();
});
