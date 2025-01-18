import { Types } from "mongoose";

export interface ISite {
  data: string;
  owner: Types.ObjectId;
  screenShot?: string;
  name: string;
  domain: string;
  createdAt?: Date;
  updatedAt?: Date;
  save: () => void;
}
