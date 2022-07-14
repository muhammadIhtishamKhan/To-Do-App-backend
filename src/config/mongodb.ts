import mongoose from "mongoose";

export function connectMongoDB(): void {
  try {
    mongoose.connect(process.env.MONGO_CONNECTION!);
    const db = mongoose.connection;
    db.on(
      "error",
      console.error.bind(console, "Unable to connect to database")
    );
    db.once("open", () => {
      console.log("Successfully connected to database.");
    });
  } catch (err) {
    console.log(
      "The following error occured while connecting to MongoDB: ",
      err
    );
  }
}
