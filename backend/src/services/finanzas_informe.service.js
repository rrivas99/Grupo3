"use strict";
import Finanzas_informe from "../entity/finanzas_informe.entity.js";
import { AppDataSource } from "../config/configDb.js";

export async function createFinanzas_informeService(dataFinanzas_informe) {
    try {
        const finanzas_informeRepository = AppDataSource.getRepository(Finanzas_informe);

        const newFinanzas_informe = finanzas_informeRepository.create({
            ingresos: dataFinanzas_informe.ingresos,
            egresos: dataFinanzas_informe.egresos,
        });

        const finanzas_informeSaved = await finanzas_informeRepository.save(newFinanzas_informe);
        return [finanzas_informeSaved, null];

    } catch (error) {
        console.error("Error creando el informe: ", error);
        return [null, "error interno del servidor"];
    }
}

export async function getFinanzas_informeService(query) {
    try {
        const { id, ingresos, egresos } = query;

        const finanzas_informeRepository = AppDataSource.getRepository(Finanzas_informe);

        const finanzas_informeFound = await finanzas_informeRepository.findOne({ 
            where: [ { id: id }, { ingresos: ingresos }, { egresos: egresos } ],
        });

        if(!finanzas_informeFound) return [null, "Informe no encontrado"];

        const { ...finanzas_informeData } = finanzas_informeFound;

        return[finanzas_informeData, null];
    } catch (error) {
        console.error("Error al obtener el informe: ", error);
        return [null, "Error interno del servidor"];
    }
}

export async function getFinanzas_informesService() {
    try {
        const finanzas_informeRepository = AppDataSource.getRepository(Finanzas_informe);

        const finanzas_informe = await finanzas_informeRepository.find();

        if(!finanzas_informe || finanzas_informe.length === 0) return [null, "no hay informes"];

        const finanzas_informeData = finanzas_informe.map(({ ...finanzas_informe }) => finanzas_informe);
        return [finanzas_informeData, null];
    } catch (error) {
        console.error("Error al obtener los informes: ", error);
        return [null, "Error interno del servidor"];
    }
}

export async function updateFinanzas_informeService(query, body) {
    try {
        const { id } = query;

        const finanzas_informeRepository = AppDataSource.getRepository(Finanzas_informe);
        const finanzas_informeFound = await finanzas_informeRepository.findOne({ where: [{ id: id }], });

        if(!finanzas_informeFound) return [null, "Informe no encontrado"];

        const dataFinanzas_informe = {
            ingresos: body.ingresos,
            egresos: body. egresos,
            updatedAt: new Date(),
        };


        await finanzas_informeRepository.update({ id: finanzas_informeFound.id }, dataFinanzas_informe);
        const finanzas_informeData = await finanzas_informeRepository.findOne({
            where: [{ id: finanzas_informeFound.id }],
        });
        
        const { ...finanzas_informeUpdated } = finanzas_informeData;
        return [finanzas_informeUpdated, null];

    } catch (error) {
        console.error("Error al actualizar el informe: ", error);
        return [null, "Error interno del servidor"];
    }
}

export async function deleteFinanzas_informeService(query) {
    try {
        const { id } = query;
        const finanzas_informeRepository = AppDataSource.getRepository(Finanzas_informe);
        const finanzas_informeFound = await finanzas_informeRepository.findOne({ where: [{ id: id }], });

        const finanzas_informeDeleted = await finanzas_informeRepository.remove(finanzas_informeFound);

        const { ...dataFinanzas_informe } = finanzas_informeDeleted;
        
        return [dataFinanzas_informe, null];

    } catch (error) {
        console.error("Error al eliminar el informe: ", error);
        return [null, "Error interno del servidor"];
    }
}