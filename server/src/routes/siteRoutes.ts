import express from "express";
import {
  createNewSite,
  getSites,
  getSite,
  updateSiteById,
  deleteSiteById,
  getUserSites,
} from "../controllers/siteController";
import { authenticateUser } from "../riddleware/authMiddleware";

const router = express.Router();

router.post("/create", authenticateUser, createNewSite);
router.get("/", getSites);
router.get("/:id", authenticateUser, getSite);
router.get("/user/sites", authenticateUser, getUserSites);
router.put("/:id", authenticateUser, updateSiteById);
router.delete("/:id", authenticateUser, deleteSiteById);

export default router;
