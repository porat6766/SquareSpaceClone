"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const router = express_1.default.Router();
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    try {
        // Find or create user by email
        const email = profile.emails?.[0]?.value;
        if (!email) {
            return done(new Error('No email found'), undefined);
        }
        let user = await userModel_1.default.findOne({ email });
        const displayName = profile.name.givenName + " " + profile.name.familyName;
        if (!user) {
            user = new userModel_1.default({
                email,
                firstName: profile.name.givenName || "",
                lastName: profile.name.familyName || "",
                displayName: displayName,
                profileImage: profile.photos[0].value || "",
            });
            await user.save();
        }
        return done(null, user);
    }
    catch (error) {
        return done(error, undefined);
    }
}));
passport_1.default.serializeUser((user, done) => done(null, user));
passport_1.default.deserializeUser(async (id, done) => {
    try {
        const user = await userModel_1.default.findById(id);
        done(null, user);
    }
    catch (error) {
        done(error, null);
    }
});
router.get('/api/auth/google', passport_1.default.authenticate('google', {
    scope: ['profile', 'email']
}));
router.get("/auth/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
router.get("/api/auth/google/callback", passport_1.default.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    const user = req.user;
    const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "3h",
    });
    res.cookie("token", token, {
        httpOnly: false, // process.env.NodeEnv === 'production'
        secure: true, // process.env.NodeEnv === 'production'
        sameSite: "strict",
    });
    res.redirect(`http://localhost:5173`);
});
exports.default = router;
//# sourceMappingURL=GoogleAuth.js.map