import { Request, Response } from "express";
import Site from "../models/siteModel";
import { AuthenticatedRequest } from "src/types/expressTypes";
import User from "../models/userModel";

export const createNewSite = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { data, screenShot, name, domain } = req.body;
    const owner = req.user?._id;

    //
    const newSite = new Site({ data, owner, screenShot, name, domain });
    await newSite.save();

    await User.findByIdAndUpdate(owner, {
      $push: { sites: newSite._id },
    });

    res.status(201).json(newSite);
  } catch (error) {
    res.status(400).json({ message: "Error creating site", error });
  }
};

export const getSites = async (req: Request, res: Response): Promise<void> => {
  try {
    const sites = await Site.find().populate("owner", "name email");
    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sites", error });
  }
};

export const getSite = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const site = await Site.findById(id).populate("owner", "name email");

    if (!site) {
      res.status(404).json({ message: "Site not found" });
      return;
    }

    res.status(200).json(site);
  } catch (error) {
    res.status(500).json({ message: "Error fetching site", error });
  }
};

export const getUserSites = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?._id;
    const sites = await Site.find({ owner: userId });

    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user sites", error });
  }
};

export const updateSiteById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { data, screenShot, name, domain } = req.body;

    const updatedSite = await Site.findByIdAndUpdate(
      id,
      { data, screenShot, name, domain },
      { new: true, runValidators: true }
    );

    if (!updatedSite) {
      res.status(404).json({ message: "Site not found" });
      return;
    }

    res.status(200).json(updatedSite);
  } catch (error) {
    res.status(400).json({ message: "Error updating site", error });
  }
};

export const deleteSiteById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedSite = await Site.findByIdAndDelete(id);

    if (!deletedSite) {
      res.status(404).json({ message: "Site not found" });
      return;
    }

    await User.findByIdAndUpdate(deletedSite.owner, {
      $pull: { sites: deletedSite._id },
    });

    res.status(200).json({ message: "Site deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting site", error });
  }
};
