"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const siteRoutes_1 = __importDefault(require("./routes/siteRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.LOCAL_CLIENT_URL,
    credentials: true,
}));
if (process.env.URI) {
    mongoose_1.default
        .connect(process.env.URI)
        .then(() => console.log("Successfully Connected to DB"))
        .catch((err) => console.error("Connection to DB failed", err));
}
else {
    console.error("DB_URI environment variable is not defined");
}
app.get("/", (req, res) => {
    res.status(200).send({ message: "Server is alive !" });
});
app.use("/api/users", userRoutes_1.default);
app.use("/api/sites", siteRoutes_1.default);
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map