import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  id?: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
  googleId: string;
  profileImage: string;
  role: string;
  bio?: string;
  sites: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
  favoriteTemplates: string[];
}

export type IUserWithoutId = Omit<IUser, "id">;
