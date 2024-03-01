import { Router as expressRouter } from "express";
import * as authcontroller from "./auth.controller.js";
import { loginSchema, signupSchema } from "./auth.shcema.js";
import { validation } from "../../middleware/validation.middlware.js";

const router = expressRouter();

router.post("/signup", validation(signupSchema), authcontroller.signup);
router.post("/login", validation(loginSchema), authcontroller.login);

export default router;
