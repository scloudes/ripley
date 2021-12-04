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

router.get("/people", getPeople);
router.get("/people/average", ageAverage);
router.get("/people/:id", getPerson);
router.post("/people", createPerson);
router.put("/people/:id", updatePerson);
router.delete("/people/:id", deletePerson);

export default router;
