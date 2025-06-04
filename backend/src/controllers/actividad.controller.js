"use strict";
import {
  createActividadService,
  deleteActividadService,
  getActividadesService,
  getActividadService,
  updateActividadService,
} from "../services/actividad.service.js";
import {
  handleErrorClient,
  handleErrorServer,
  handleSuccess,
} from "../handlers/responseHandlers.js";

export async function createActividad(req, res) {
    try {
      const actividad = req.body;

      const [newActividad, errorNewActividad] = await createActividadService(actividad);
      if (errorNewActividad) return handleErrorClient(res, 400, errorNewActividad);
      handleSuccess(res, 201, "Actividad creada", newActividad);
    } catch (error) {
      handleErrorServer(res,500, error.message);
    }
}

export async function getActividad(req, res) {
  try {
    const { id } = req.query;

    const [actividad, errorActividad] = await getActividadService({ id });
    if (errorActividad) return handleErrorClient(res, 404, errorActividad);

    handleSuccess(res, 200, "Actividad encontrada", actividad);
  } catch (error) {
    handleErrorServer(res,500, error.message);
  }
}

export async function getActividades(req, res) {
  try {
    const [actividad, errorActividad] = await getActividadesService();
    if (errorActividad) return handleErrorClient(res,404, errorActividad);
    actividad.length === 0
    ? handleSuccess(res, 204, "No hay actividades")
    : handleSuccess(res, 200, "Actividades ancontradas", actividad);
  } catch (error) {
    handleErrorServer(res,500, error.message);
  }
}

export async function updateActividad(req, res) {
  try {
    const { id } = req.query;
    const { body } = req;

    const [actividad, errorActividad] = await updateActividadService({ id }, body);
    if(errorActividad) return handleErrorClient(res,404, errorActividad);

    handleSuccess(res, 200, "Actividad actualizada", actividad);
  } catch (error) {
    handleErrorServer(res,500, error.message);
  }
}

export async function deleteActividad(req, res) {
  try {
    const { id } = req.query;
    const [actividad, errorActividad] = await deleteActividadService({ id });
    if (errorActividad) return handleErrorClient(res, 404, errorActividad);

    handleSuccess(res, 200, "Actividad eliminada", actividad);
  } catch (error) {
    handleErrorClient(res, 500, error.message);
  }
}