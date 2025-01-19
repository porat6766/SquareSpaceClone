"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const siteController_1 = require("../controllers/siteController");
const authMiddleware_1 = require("../riddleware/authMiddleware");
const router = express_1.default.Router();
router.post("/create", authMiddleware_1.authenticateUser, siteController_1.createNewSite);
router.get("/", siteController_1.getSites);
router.get("/:id", siteController_1.getSite);
router.get("/user/sites", authMiddleware_1.authenticateUser, siteController_1.getUserSites);
router.put("/:id", authMiddleware_1.authenticateUser, siteController_1.updateSiteById);
router.delete("/:id", authMiddleware_1.authenticateUser, siteController_1.deleteSiteById);
exports.default = router;
//# sourceMappingURL=siteRoutes.js.map