import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: [true, "Username is Required"],
      index: true,
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      index: true,
      required: [true, "email is Required"],
      unique: true,
    },
    password: { type: String, required: [true, "Password cannot be blank"] },
  },
  { timestamps: true }
);

export const User = mongoose.model("Users", UserSchema);
