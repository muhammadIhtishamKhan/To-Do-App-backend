import mongoose from "mongoose";

export function connectMongoDB(): void {
  try {
    console.log(process.env.MONGO_CONNECTION);
    mongoose.connect(process.env.MONGO_CONNECTION!);
    const db = mongoose.connection;
    db.on(
      "error",
      console.error.bind(console, "Unable to connect with database")
    );
    db.once("open", () => {
      console.log("Successfully connect with database.");
    });
  } catch (err) {
    console.log(
      "The following error occured while connecting to MongoDB: ",
      err
    );
  }
}
