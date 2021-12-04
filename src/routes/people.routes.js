import express from "express";
import {
  getPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
  ageAverage
} from "../controllers/people.controller";
const router = express.Router();

router.get("/api", getPeople);
router.get("/api/average", ageAverage);
router.get("/api/:id", getPerson);
router.post("/api", createPerson);
router.put("/api/:id", updatePerson);
router.delete("/api/:id", deletePerson);

export default router;
