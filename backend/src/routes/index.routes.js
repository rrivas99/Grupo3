"use strict";
import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import actividadRoutes from "./actividad.routes.js";
import informeRoutes from "./informe.routes.js";
const router = Router();

router
    .use("/auth", authRoutes)
    .use("/user", userRoutes)
    .use("/actividad", actividadRoutes)
    .use("/informe", informeRoutes);

export default router;