"use strict";
import { Router } from "express";
import { authenticateJwt } from "../middlewares/authentication.middleware.js";
import {
  createActividad,
  deleteActividad,
  getActividad,
  getActividades,
  updateActividad,
} from "../controllers/actividad.controller.js";
const router = Router();

router
  .use(authenticateJwt);

router
  .post("/", createActividad)
  .get("/", getActividades)
  .get("/:id", getActividad)
  .patch("/:id", updateActividad)
  .delete("/:id", deleteActividad);

export default router;