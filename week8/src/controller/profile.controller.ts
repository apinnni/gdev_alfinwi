import { Request, Response } from "express";
import * as ProfileService from "../services/profile.service";
import { ProfileSchema } from "../schemas/profile.schema";

export const createProfile = async (req: Request, res: Response) => {
  try {
    const validated = ProfileSchema.parse(req.body);
    const data = await ProfileService.createProfile(validated);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: "Validation error", error });
  }
};

export const getProfiles = async (req: Request, res: Response) => {
  const data = await ProfileService.getAllProfiles();
  res.status(200).json(data);
};

export const getProfile = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const data = await ProfileService.getProfileById(id);

  if (!data) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(200).json(data);
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const validated = ProfileSchema.partial().parse(req.body);

    const data = await ProfileService.updateProfile(id, validated);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Error update", error });
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  await ProfileService.deleteProfile(id);

  res.status(200).json({ message: "Deleted successfully" });
};