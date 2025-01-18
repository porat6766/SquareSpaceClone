import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "../models/userModel";
import { IUser } from "../types/userTypes";
import { AuthenticatedRequest } from "../types/expressTypes";

export const getUserById = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    console.log(userId);

    if (!userId) {
      res.status(400).json({ message: "User not authenticated" });
      return;
    }

    const user: IUser | null = await User.findById(userId).populate("sites");

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    res.status(200).json({
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      res.status(400).json({ message: "Email is already registered." });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const displayName = firstName + " " + lastName;

    const newUser = await User.create({
      firstName,
      lastName,
      displayName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "3h",
      }
    );

    const userResponse = {
      id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      createdAt: newUser.createdAt,
      role: newUser.role,
    };
    res.cookie("token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "strict",
    });

    res.status(201).json({
      message: "User created successfully",
      user: userResponse,
    });
    console.log("User created successfully", userResponse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: { email: string; password: string } = req.body;
    console.log(email);
    console.log(password);

    const user: IUser | null = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials." });
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "3h",
    });

    const userResponse = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt,
      role: user.role,
    };

    res.cookie("token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "strict",
    });

    res.status(200).json({ message: "Login successful", user: userResponse });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const updateData: Partial<IUser> = req.body;
    const { password, favoriteTemplateId } = req.body;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    if (favoriteTemplateId) {
      const favoriteTemplates = user.favoriteTemplates || [];
      const index = favoriteTemplates.indexOf(favoriteTemplateId);

      if (index > -1) {
        favoriteTemplates.splice(index, 1);
      } else {
        favoriteTemplates.push(favoriteTemplateId);
      }

      updateData.favoriteTemplates = favoriteTemplates;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { ...updateData },
      { new: true, runValidators: true }
    );

    console.log(updatedUser);

    if (!updatedUser) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const logOut = async (req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie("token", {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const deleteUser = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;

    const user: IUser | null = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    if (user._id.toString() !== req.user?.id) {
      res.status(403).json({ message: "You can't delete another user." });
      return;
    }

    await user.deleteOne();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
