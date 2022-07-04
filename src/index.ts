import express, { Application } from "express";
const app: Application = express();

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
