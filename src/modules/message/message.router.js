import { Router as expressRouter } from "express";
import { isAuthenticated } from "../../middleware/authntication.middlware.js";
import { validation } from "../../middleware/validation.middlware.js";
import { sendmessageschema } from "./message.schema.js";
import { asyncHandelrs } from "../../utils/asyncHandlers.js";
import * as messageController from "./message.controller.js";
const router = expressRouter();

router.post(
  "/",
  isAuthenticated,
  validation(sendmessageschema),
  asyncHandelrs(messageController.sendMessage)
);

export default router;
