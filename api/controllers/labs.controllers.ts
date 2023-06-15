import { Request, Response } from "express";
import { ILab, Lab } from "../models/Labs";

export const getAllLabs = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const createLab = async (req: Request<{}, {}, ILab>, res: Response) => {
  try {
    const user = new Lab<ILab>(req.body);
    await user.save();
    return res.status(201).send(user);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const updateLab = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const getLabById = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const deleteLab = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};
