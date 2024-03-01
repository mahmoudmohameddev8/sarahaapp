import { Schema, model, Types } from "mongoose";

const userschema = new Schema(
  {
    name: { type: String, required: true, min: 5, max: 20 },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    age: { type: Number, min: 18, max: 70 },
  },

  { timestamps: true }
);
export const User = model("User", userschema);

/////"Aa12345"user password//
