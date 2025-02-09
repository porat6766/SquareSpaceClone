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
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const siteRoutes_1 = __importDefault(require("./routes/siteRoutes"));
const GoogleAuth_1 = __importDefault(require("./GoogleAuth/GoogleAuth"));
const crypto_1 = __importDefault(require("crypto"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb", extended: true }));
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "https://squarespaceclone.onrender.com"],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
const secret = crypto_1.default.randomBytes(64).toString('hex');
app.use((0, express_session_1.default)({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000
    }
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
if (process.env.URI) {
    mongoose_1.default
        .connect(process.env.URI)
        .then(() => console.log("Successfully Connected to DB"))
        .catch((err) => console.error("Connection to DB failed", err));
}
else {
    console.error("DB_URI environment variable is not defined");
}
app.use(GoogleAuth_1.default);
app.use("/api/users", userRoutes_1.default);
app.use("/api/sites", siteRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: err.message });
});
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../public", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map