"use strict";
import {
  createInformeService,
  deleteInformeService,
  getInformeService,
  getInformesService,
  updateInformeService,
} from "../services/informe.service.js";
import {
  handleErrorClient,
  handleErrorServer,
  handleSuccess,
} from "../handlers/responseHandlers.js";

export async function createInforme(req, res) {
    try {
      const informe = req.body;

      const [newInforme, errornewInforme] = await createInformeService(informe);

      if (errornewInforme) return handleErrorClient(res, 400, errornewInforme);
      
      handleSuccess(res, 201, "Informe creado", newInforme);
      
    } catch (error) {
      handleErrorServer(res,500, error.message);
    }
}

export async function getInforme(req, res) {
  try {
    const { id, ingresos, egresos } = req.query;

    const [ inf, errorInf] = await getInformeService({ id, ingresos, egresos });

    if(errorInf) return handleErrorClient(res, 404, errorInf);

    handleSuccess(res, 200, "Informe encontrado", inf);
  } catch (error) {
    handleErrorServer(res,500, error.message);
  }
}

export async function getInformes(req, res) {
  try {
    const [informes, errorInformes] = await getInformesService();

    if(errorInformes) return handleErrorClient(res, 404, errorInformes);

    informes.length === 0
      ? handleSuccess(res, 204, "No hay informes")
      : handleSuccess(res, 200, "Informes encontrados", informes);

  } catch (error) {
    handleErrorServer(res,500, error.message);
  }
}

export async function updateInforme(req, res) {
  try {
    const { id } = req.query
    const { body } = req;

    const [informe, errorInforme] = await updateInformeService({ id }, body);
    if (errorInforme) return handleErrorClient(res,404, errorInforme);
    
    handleSuccess(res, 200, "Informe actualizado", informe);
  } catch (error) {
    handleErrorServer(res,500, error.message);
  }
}

export async function deleteInforme(req, res) {
  try {
    const { id } = req.query;

    const [informe, errorInforme] = await deleteInformeService({ id });

    if (errorInforme) return handleErrorClient(res, 404, errorInforme);

    handleSuccess(res, 200, "Informe eliminado", informe);
  } catch (error) {
    handleErrorClient(res, 500, error.message);
  }
}