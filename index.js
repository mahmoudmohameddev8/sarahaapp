import express from "express";
import { connectDB } from "./DB/models/connection.js";
import dotenv from "dotenv";
import authRouter from "./src/modules/auth/auth.router.js";
import messageRouter from "./src/modules/message/message.router.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
await connectDB();

app.use("/auth", authRouter);
app.use("/message", messageRouter);

app.all("*", (req, res, next) => {
  return next(new Error("page not found"));
});
app.use((error, req, res, next) => {
  return res.json({
    success: false,
    message: error.message,
    stack: error.stack,
  });
});
app.listen(port, () => console.log(` app listening on port ${port}!`));
