"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../riddleware/authMiddleware");
const router = express_1.default.Router();
router.get("/getuserbyid", authMiddleware_1.authenticateUser, userController_1.getUserById);
router.post("/signup", userController_1.signUp);
router.post("/login", userController_1.logIn);
router.post("/logout", authMiddleware_1.authenticateUser, userController_1.logOut);
router.put("/updateUser/:id", authMiddleware_1.authenticateUser, userController_1.updateUser);
router.delete("/deleteUser/:id", authMiddleware_1.authenticateUser, userController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map