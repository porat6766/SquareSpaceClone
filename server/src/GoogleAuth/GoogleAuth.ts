
import express, { Request, Response } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import { IUser } from '../types/userTypes';
import User from '../models/userModel';

declare module 'express-session' {
    interface SessionData {
        passport: { user: any }
    }
}

interface UserProfile {
    id: string;
    email: string;
    displayName: string;
    googleId: string;
}

interface GoogleAuthenticatedRequest extends Request {
    user?: any;
}

const router = express.Router();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: 'http://localhost:3000/api/auth/google/callback',
        },
        async (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
            console.log(profile);

            try {
                // Find or create user by email
                const email = profile.emails?.[0]?.value;
                if (!email) {
                    return done(new Error('No email found'), undefined);
                }

                let user = await User.findOne({ email });
                const displayName = profile.name.givenName + " " + profile.name.familyName;

                if (!user) {
                    user = new User({
                        email,
                        firstName: profile.name.givenName || "",
                        lastName: profile.name.familyName || "",
                        displayName: displayName,
                        profileImage: profile.photos[0].value || "",
                    });

                    await user.save();
                }

                return done(null, user!);
            } catch (error) {
                return done(error as Error, undefined);
            }
        }
    )
);

passport.serializeUser((user: any, done: Function) => done(null, user));

passport.deserializeUser(async (id: string, done) => {
    try {
        const user = await User.findById(id) as IUser;
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

router.get('/api/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));


router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/api/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {

        const user = req.user as IUser;

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "3h",
            }
        );

        res.cookie("token", token, {
            httpOnly: false, // process.env.NodeEnv === 'production'
            secure: true, // process.env.NodeEnv === 'production'
            sameSite: "strict",
        });

        res.redirect(`http://localhost:5173`);
    }
);


export default router;


















