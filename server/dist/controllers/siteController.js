"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSiteById = exports.updateSiteById = exports.getUserSites = exports.getSite = exports.getSites = exports.createNewSite = void 0;
const siteModel_1 = __importDefault(require("../models/siteModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const createNewSite = async (req, res) => {
    try {
        const { data, screenShot, name, domain } = req.body;
        const owner = req.user?._id;
        //
        const newSite = new siteModel_1.default({ data, owner, screenShot, name, domain });
        await newSite.save();
        await userModel_1.default.findByIdAndUpdate(owner, {
            $push: { sites: newSite._id },
        });
        res.status(201).json(newSite);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating site", error });
    }
};
exports.createNewSite = createNewSite;
const getSites = async (req, res) => {
    try {
        const sites = await siteModel_1.default.find().populate("owner", "name email");
        res.status(200).json(sites);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching sites", error });
    }
};
exports.getSites = getSites;
const getSite = async (req, res) => {
    try {
        const { id } = req.params;
        const site = await siteModel_1.default.findById(id).populate("owner", "name email");
        if (!site) {
            res.status(404).json({ message: "Site not found" });
            return;
        }
        res.status(200).json(site);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching site", error });
    }
};
exports.getSite = getSite;
const getUserSites = async (req, res) => {
    try {
        const userId = req.user?._id;
        const sites = await siteModel_1.default.find({ owner: userId });
        res.status(200).json(sites);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user sites", error });
    }
};
exports.getUserSites = getUserSites;
const updateSiteById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, screenShot, name, domain } = req.body;
        const updatedSite = await siteModel_1.default.findByIdAndUpdate(id, { data, screenShot, name, domain }, { new: true, runValidators: true });
        if (!updatedSite) {
            res.status(404).json({ message: "Site not found" });
            return;
        }
        res.status(200).json(updatedSite);
    }
    catch (error) {
        res.status(400).json({ message: "Error updating site", error });
    }
};
exports.updateSiteById = updateSiteById;
const deleteSiteById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSite = await siteModel_1.default.findByIdAndDelete(id);
        if (!deletedSite) {
            res.status(404).json({ message: "Site not found" });
            return;
        }
        await userModel_1.default.findByIdAndUpdate(deletedSite.owner, {
            $pull: { sites: deletedSite._id },
        });
        res.status(200).json({ message: "Site deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting site", error });
    }
};
exports.deleteSiteById = deleteSiteById;
//# sourceMappingURL=siteController.js.map