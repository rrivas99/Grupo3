"use strict";
import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import emailRoutes from "./email.routes.js";
import actividadRoutes from "./actividad.routes.js";
import informeRoutes from "./informe.routes.js";
import asistenciaRoutes from "./asistencia.routes.js";
const router = Router();

router
    .use("/auth", authRoutes)
    .use("/user", userRoutes)
    .use("/actividad", actividadRoutes)
    .use("/informe", informeRoutes)
    .use("/asistencia", asistenciaRoutes)
    -use("/email", emailRoutes)

export default router;