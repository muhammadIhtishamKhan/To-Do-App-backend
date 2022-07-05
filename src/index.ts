import express, { Application } from "express";
import mongoose from "mongoose";
require("dotenv").config();
const app: Application = express();

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
