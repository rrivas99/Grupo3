"use strict";
import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import actividadRoutes from "./actividad.routes.js";
import finanzas_informeRoutes from "./finanzas_informe.routes.js";
const router = Router();

router
    .use("/auth", authRoutes)
    .use("/user", userRoutes)
    .use("/actividad", actividadRoutes)
    .use("/finanzas_informe", finanzas_informeRoutes);

export default router;