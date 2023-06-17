import { Router } from "express";

import {
  createLab,
  deleteLab,
  getAllLabs,
  getLabById,
  updateLab,
} from "../controllers/labs.controllers";

import { checkSchema } from "express-validator";

let checkSchemaLab = checkSchema({
  name: {
    isString: {
      errorMessage: "Lab name should be a string",
    },
    isLength: {
      options: { min: 5, max: 50 },
      errorMessage: "Lab name should be at least 8 chars long and less than 20",
    },
  },
  technology: {
    isString: {
      errorMessage: "Lab technology should be a string",
    },
    isLength: {
      options: { min: 5, max: 50 },
      errorMessage: "Lab technology should be at least 8 chars long",
    },
  },
  start_date: {
    isISO8601: {
      errorMessage: "Lab start date should be a date",
    },
    custom: {
      options: (value, { req }) => {
        if (new Date(value) < new Date()) {
          throw new Error("Lab start date should not be a date in the past");
        }

        if (new Date(value) > new Date(req.body.end_date)) {
          throw new Error("Lab start date should be a date before end date");
        }

        return true;
      },
    },
  },
  end_date: {
    isISO8601: {
      errorMessage: "Lab end date should be a date",
    },
    custom: {
      options: (value, { req }) => {
        if (new Date(value) < new Date()) {
          throw new Error("Lab end date should not be a date in the past");
        }

        if (new Date(value) < new Date(req.body.end_date)) {
          throw new Error("Lab end date should be a date after start date");
        }

        return true;
      },
    },
  },
});

const router = Router();

router.get("/", getAllLabs);
router.post("/create", checkSchemaLab, createLab);
router.put("/:lab_id", checkSchemaLab, updateLab);
router.get("/:lab_id", getLabById);
router.delete("/:lab_id", deleteLab);
export { router };
