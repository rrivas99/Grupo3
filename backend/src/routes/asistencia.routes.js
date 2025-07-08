"use strict";
import { Router } from "express";
import { authenticateJwt } from "../middlewares/authentication.middleware.js";
import {
  createAsistencia,
  deleteAsistencia,
  getAsistencia,
  getAsistencias,
  updateAsistencia,
} from "../controllers/asistencia.controller.js";
const router = Router();

router
  .use(authenticateJwt);

router
  .post("/", createAsistencia)
  .get("/", getAsistencia)
  .get("/:id", getAsistencias)
  .patch("/:id", updateAsistencia)
  .delete("/:id", deleteAsistencia);

export default router;