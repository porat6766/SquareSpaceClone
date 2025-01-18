import mongoose, { Schema, Model } from "mongoose";
import { ISite } from "../types/siteTypes";

const siteSchema: Schema<ISite> = new mongoose.Schema(
  {
    data: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    screenShot: { type: String, required: false },
    name: { type: String, required: true },
    domain: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Site: Model<ISite> = mongoose.model<ISite>("Site", siteSchema);

export default Site;
