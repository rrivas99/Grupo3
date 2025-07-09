"use strict";
import {
  createFinanzas_informeService,
  deleteFinanzas_informeService,
  getFinanzas_informeService,
  getFinanzas_informesService,
  updateFinanzas_informeService,
} from "../services/informe.service.js";
import {
  handleErrorClient,
  handleErrorServer,
  handleSuccess,
} from "../handlers/responseHandlers.js";

export async function createFinanzas_informe(req, res) {
    try {
      const finanzas_informe = req.body;

      const [newFinanzas_informe, errornewFinanzas_informe] = await createFinanzas_informeService(finanzas_informe);

      if (errornewFinanzas_informe) return handleErrorClient(res, 400, errornewFinanzas_informe);
      
      handleSuccess(res, 201, "Informe creado", newFinanzas_informe);
      
    } catch (error) {
      handleErrorServer(res,500, error.message);
    }
}

export async function getFinanzas_informe(req, res) {
  try {
    const { id, ingresos, egresos } = req.query;

    const [ inf, errorInf] = await getFinanzas_informeService({ id, ingresos, egresos });

    if(errorInf) return handleErrorClient(res, 404, errorInf);

    handleSuccess(res, 200, "Informe encontrado", inf);
  } catch (error) {
    handleErrorServer(res,500, error.message);
  }
}

export async function getFinanzas_informes(req, res) {
  try {
    const [finanzas_informes, errorFinanzas_informes] = await getFinanzas_informesService();

    if(errorFinanzas_informes) return handleErrorClient(res, 404, errorFinanzas_informes);

    finanzas_informes.length === 0
      ? handleSuccess(res, 204, "No hay informes")
      : handleSuccess(res, 200, "Informes encontrados", finanzas_informes);

  } catch (error) {
    handleErrorServer(res,500, error.message);
  }
}

export async function updateFinanzas_informe(req, res) {
  try {
    const { id } = req.query
    const { body } = req;

    const [finanzas_informe, errorFinanzas_informe] = await updateFinanzas_informeService({ id }, body);
    if (errorFinanzas_informe) return handleErrorClient(res,404, errorFinanzas_informe);
    
    handleSuccess(res, 200, "Informe actualizado", finanzas_informe);
  } catch (error) {
    handleErrorServer(res,500, error.message);
  }
}

export async function deleteFinanzas_informe(req, res) {
  try {
    const { id } = req.query;

    const [finanzas_informe, errorFinanzas_informe] = await deleteFinanzas_informeService({ id });

    if (errorFinanzas_informe) return handleErrorClient(res, 404, errorFinanzas_informe);

    handleSuccess(res, 200, "Informe eliminado", finanzas_informe);
  } catch (error) {
    handleErrorClient(res, 500, error.message);
  }
}