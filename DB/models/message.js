import { Schema, Types, model } from "mongoose";

const messageSchema = new Schema(
  {
    content: { type: String, required: true, min: 10, max: 100 },
    reciverID: { type: Types.ObjectId, ref: "User", required: true },
  },

  { timestaps: true }
);
export const Message = model("Message", messageSchema);
