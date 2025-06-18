import { Router } from "express";
import {
  contact,
  getAllContacts,
} from "../controllers/contactController.controller";

const router = Router();

router.post("/v1/contact", contact);
router.get("/v1/contact", getAllContacts);

export default router;
