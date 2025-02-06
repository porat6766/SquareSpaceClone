"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUserRefresh = exports.authenticateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const userModel_1 = __importDefault(require("../models/userModel"));
dotenv_1.default.config();
const authenticateUser = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            res.status(401).json({ message: "Access denied, no token provided." });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded.id) {
            res.status(401).json({ message: "Token is invalid or missing user id." });
            return;
        }
        const user = await userModel_1.default.findById(decoded.id);
        if (!user) {
            res.status(401).json({ message: "User not found." });
            return;
        }
        req.user = user;
        next();
    }
    catch (err) {
        if (err.name === "JsonWebTokenError") {
            res.status(403).json({ message: "Invalid token." });
        }
        else if (err.name === "TokenExpiredError") {
            res.status(401).json({ message: "Token has expired." });
        }
        else {
            res
                .status(500)
                .json({ message: "Authentication failed.", error: err.message });
        }
    }
};
exports.authenticateUser = authenticateUser;
const authenticateUserRefresh = async (req, res) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            res.status(401).json({ message: "Access denied, no token provided." });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!decoded || typeof decoded !== "object" || !("id" in decoded)) {
            res.status(403).json({ message: "Invalid token." });
            return;
        }
        const user = await userModel_1.default.findById(decoded.id);
        if (!user) {
            res.status(401).json({ message: "User not found." });
            return;
        }
        res.json({ isAuthenticated: true });
    }
    catch (err) {
        if (err.name === "JsonWebTokenError") {
            res.status(403).json({ message: "Invalid token." });
        }
        else if (err.name === "TokenExpiredError") {
            res.status(401).json({ message: "Token has expired." });
        }
        else {
            res
                .status(500)
                .json({ message: "Authentication failed.", error: err.message });
        }
    }
};
exports.authenticateUserRefresh = authenticateUserRefresh;
//# sourceMappingURL=authMiddleware.js.map