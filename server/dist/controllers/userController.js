"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.logOut = exports.updateUser = exports.logIn = exports.signUp = exports.getUserById = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const getUserById = async (req, res) => {
    try {
        const userId = req.user?.id;
        console.log(userId);
        if (!userId) {
            res.status(400).json({ message: "User not authenticated" });
            return;
        }
        const user = await userModel_1.default.findById(userId).populate("sites");
        if (!user) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        res.status(200).json({
            user,
        });
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
exports.getUserById = getUserById;
const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const existingUserEmail = await userModel_1.default.findOne({ email });
        if (existingUserEmail) {
            res.status(400).json({ message: "Email is already registered." });
            return;
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const displayName = firstName + " " + lastName;
        const newUser = await userModel_1.default.create({
            firstName,
            lastName,
            displayName,
            email,
            password: hashedPassword,
        });
        const token = jsonwebtoken_1.default.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "3h",
        });
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
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.signUp = signUp;
const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        console.log(password);
        const user = await userModel_1.default.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        const isMatch = await bcrypt_1.default.compare(password, user.password);
        console.log(isMatch);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid credentials." });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET, {
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
    }
    catch (err) {
        res.status(500).json({ message: "Server error from login", error: err });
    }
};
exports.logIn = logIn;
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const { password, favoriteTemplateId } = req.body;
        if (password) {
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            updateData.password = hashedPassword;
        }
        const user = await userModel_1.default.findById(userId);
        if (!user) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        if (favoriteTemplateId) {
            const favoriteTemplates = user.favoriteTemplates || [];
            const index = favoriteTemplates.indexOf(favoriteTemplateId);
            if (index > -1) {
                favoriteTemplates.splice(index, 1);
            }
            else {
                favoriteTemplates.push(favoriteTemplateId);
            }
            updateData.favoriteTemplates = favoriteTemplates;
        }
        const updatedUser = await userModel_1.default.findByIdAndUpdate(userId, { ...updateData }, { new: true, runValidators: true });
        console.log(updatedUser);
        if (!updatedUser) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser,
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err });
    }
};
exports.updateUser = updateUser;
const logOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
        res.status(200).json({ message: "Logout successful" });
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
exports.logOut = logOut;
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel_1.default.findById(userId);
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
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map