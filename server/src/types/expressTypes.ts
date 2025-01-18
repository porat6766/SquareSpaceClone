import { Request } from "express";
import { IUser } from "./userTypes";

export interface AuthenticatedRequest extends Request {
  user?: Partial<IUser>;
}

export interface AuthenticatedRequestOptional extends Request {
  userId?: string;
}

export interface AuthenticatedRequest extends Request {
  user?: Partial<IUser>;
}
