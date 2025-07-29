"use strict";
import { Router } from "express";
import { authenticateJwt } from "../middlewares/authentication.middleware.js";
import { isAdmin } from "../middlewares/authorization.middleware.js"
import {
  createInforme,
  deleteInforme,
  getInforme,
  getInformes,
  updateInforme,
} from "../controllers/informe.controller.js";
const router = Router();

router
  .use(authenticateJwt)
  .use(isAdmin);
router
  .post("/", createInforme)
  .get("/", getInformes)
  .get("/:id", getInforme)
  .patch("/:id", updateInforme)
  .delete("/:id", deleteInforme);

export default router;