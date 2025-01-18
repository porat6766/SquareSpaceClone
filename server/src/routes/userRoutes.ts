import express from "express";
import {
  signUp,
  logIn,
  updateUser,
  logOut,
  deleteUser,
  getUserById,
} from "../controllers/userController";
import { authenticateUser } from "../riddleware/authMiddleware";

const router = express.Router();

router.get("/getuserbyid", authenticateUser, getUserById);

router.post("/signup", signUp);

router.post("/login", logIn);

router.post("/logout", authenticateUser, logOut);

router.put("/updateUser/:id", authenticateUser, updateUser);

router.delete("/deleteUser/:id", authenticateUser, deleteUser);

export default router;
