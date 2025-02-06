import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel";
import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../types/expressTypes";

dotenv.config();

export const authenticateUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      res.status(401).json({ message: "Access denied, no token provided." });
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    if (!decoded || !decoded.id) {
      res.status(401).json({ message: "Token is invalid or missing user id." });
      return;
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(401).json({ message: "User not found." });
      return;
    }

    req.user = user;

    next();
  } catch (err: any) {
    if (err.name === "JsonWebTokenError") {
      res.status(403).json({ message: "Invalid token." });
    } else if (err.name === "TokenExpiredError") {
      res.status(401).json({ message: "Token has expired." });
    } else {
      res
        .status(500)
        .json({ message: "Authentication failed.", error: err.message });
    }
  }
};

export const authenticateUserRefresh = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      res.status(401).json({ message: "Access denied, no token provided." });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    if (!decoded || typeof decoded !== "object" || !("id" in decoded)) {
      res.status(403).json({ message: "Invalid token." });
      return;
    }


    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(401).json({ message: "User not found." });
      return;
    }

    res.json({ isAuthenticated: true });
  } catch (err: any) {
    if (err.name === "JsonWebTokenError") {
      res.status(403).json({ message: "Invalid token." });
    } else if (err.name === "TokenExpiredError") {
      res.status(401).json({ message: "Token has expired." });
    } else {
      res
        .status(500)
        .json({ message: "Authentication failed.", error: err.message });
    }
  }
};
