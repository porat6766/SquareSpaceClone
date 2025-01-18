"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const siteSchema = new mongoose_1.default.Schema({
    data: { type: String, required: true },
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    screenShot: { type: String, required: false },
    name: { type: String, required: true },
    domain: { type: String, required: true },
}, {
    timestamps: true,
});
const Site = mongoose_1.default.model("Site", siteSchema);
exports.default = Site;
//# sourceMappingURL=siteModel.js.map