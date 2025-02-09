import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "../types/userTypes";

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    displayName: { type: String, require: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: { type: String },
    googleId: { type: String, default: null },
    profileImage: {
      type: String,
    },
    role: { type: String, default: "user" },
    bio: { type: String },
    sites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Site" }],
    favoriteTemplates: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
