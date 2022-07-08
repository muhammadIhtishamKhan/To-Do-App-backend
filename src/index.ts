import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import mongoose from "mongoose";
import { connectMongoDB } from "./config/mongodb";
import * as userRoutes from "./user/router/user.router";
// import "dotenv/config";

const app: Application = express();
const BASE_PATH = "/todo";
const PORT = process.env.PORT || 2000;

connectMongoDB();

app.use(express.json());
app.use(cors({ origin: true }));

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      "-",
      tokens.url(req, res),
      "-",
      "Query:",
      JSON.stringify(req.query),
      "-",
      "Body",
      JSON.stringify(req.body),
      "-",
      "Params",
      JSON.stringify(req.params),
      "-",
      "Status:",
      tokens.status(req, res),
      "-",
      "Response Time:",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

app.use(BASE_PATH, userRoutes.routes());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
