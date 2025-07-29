"use strict";
import { Router } from "express";
import { authenticateJwt } from "../middlewares/authentication.middleware.js";
import {
  createCasa,
  deleteCasa,
  getCasa,
  getCasas,
  updateCasa,
} from "../controllers/casa.controller.js";
const router = Router();

router
  .use(authenticateJwt);

router
  .post("/", createCasa)
  .get("/", getCasas)
  .get("/:id", getCasa)
  .patch("/:id", updateCasa)
  .delete("/:id", deleteCasa);

export default router;