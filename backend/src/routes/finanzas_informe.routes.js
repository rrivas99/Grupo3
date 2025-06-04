"use strict";
import { Router } from "express";
import { authenticateJwt } from "../middlewares/authentication.middleware.js";
import { isAdmin } from "../middlewares/authorization.middleware.js"
import {
  createFinanzas_informe,
  deleteFinanzas_informe,
  getFinanzas_informe,
  getFinanzas_informes,
  updateFinanzas_informe,
} from "../controllers/finanzas_informe.controller.js";
const router = Router();

router
  .use(authenticateJwt)
  .use(isAdmin);
router
  .post("/", createFinanzas_informe)
  .get("/", getFinanzas_informes)
  .get("/:id", getFinanzas_informe)
  .patch("/:id", updateFinanzas_informe)
  .delete("/:id", deleteFinanzas_informe);

export default router;