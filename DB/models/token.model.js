import { Schema, Types, model } from "mongoose";

export const tokenschema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    user: {
      type: Types.ObjectId,
      default: true,
    },
    isvalid: {
      type: Boolean,
      default: true,
    },
    agent: {
      type: String,
    },
    expiredAt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Token = model("Token", tokenschema);
