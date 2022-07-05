import mongoose from "mongoose";

// async function mongoConnection(): Promise<string | void> {
//   try {
//     const mongoConnection = await mongoose.connect("mongodb://localhost/To-Do");
//     console.log(mongoConnection);
//   } catch (err) {
//     console.log(
//       "The following error occured while connecting to MongoDB: ",
//       err
//     );
//   }
// }

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is Required"],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      index: true,
      required: [true, "email is Required"],
    },
    password: { type: String, required: [true, "Password cannot be blank"] },
  },
  { timestamps: true }
);
