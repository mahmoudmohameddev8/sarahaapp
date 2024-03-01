import { User } from "../../../DB/models/user.model.js";
import { Message } from "../../../DB/models/message.js";

export const sendMessage = async (req, res, next) => {
  const user = await User.findById(req.body.reciverID);
  if (!user) return next(new Error("reciver not found", { cause: 404 }));

  await Message.create(req.body);
  return res.json({ sucess: true, message: "message sent sucessfully" });
};
