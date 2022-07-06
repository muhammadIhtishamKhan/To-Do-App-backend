import mongoose from "mongoose";

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

export const User = mongoose.model("Users", UserSchema);
