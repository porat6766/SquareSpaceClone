"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
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
    sites: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Site" }],
    favoriteTemplates: [{ type: String }],
}, {
    timestamps: true,
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
//# sourceMappingURL=userModel.js.map