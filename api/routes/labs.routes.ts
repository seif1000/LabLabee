import e, { Router } from "express";
import {
  createLab,
  deleteLab,
  getAllLabs,
  getLabById,
  updateLab,
} from "../controllers/labs.controllers";

const router = Router();

router.get("/", getAllLabs);
router.post("/", createLab);
router.put("/:lab_id", updateLab);
router.get("/:lab_id", getLabById);
router.delete("/:lab_id", deleteLab);
export { router };
