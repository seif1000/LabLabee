import { Request, Response } from "express";
import { ILab, Lab } from "../models/Labs";
import { validationResult } from "express-validator";

export const getAllLabs = async (req: Request, res: Response) => {
  try {
    const labs: Array<ILab> = await Lab.find();
    return res.status(200).send(labs);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const createLab = async (req: Request<{}, {}, ILab>, res: Response) => {
  try {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).send(result.array());
    }
    const user = new Lab<ILab>(req.body);

    await user.save();
    return res.status(201).send(user);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const updateLab = async (
  req: Request<{ lab_id: string }, {}, {}>,
  res: Response
) => {
  try {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).send(result.array());
    }

    const lab = await Lab.findByIdAndUpdate<ILab>(req.params.lab_id, req.body, {
      new: true,
    });
    if (!lab) return res.status(404).send("Lab not found");
    return res.status(200).send(lab);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const getLabById = async (
  req: Request<{ lab_id: string }, {}, {}>,
  res: Response
) => {
  try {
    const lab = await Lab.findById(req.params.lab_id);
    if (!lab) return res.status(404).send("Lab not found");
    return res.status(200).send(lab);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const deleteLab = async (
  req: Request<{ lab_id: string }, {}, {}>,
  res: Response
) => {
  try {
    const lab = await Lab.findByIdAndDelete(req.params.lab_id);
    if (!lab) return res.status(404).send("Lab not found");
    return res.status(200).send(lab);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};
