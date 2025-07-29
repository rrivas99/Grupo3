"use strict";
import Informe from "../entity/informe.entity.js";
import { AppDataSource } from "../config/configDb.js";

export async function createInformeService(dataInforme) {
    try {
        const informeRepository = AppDataSource.getRepository(Informe);

        const newInforme = informeRepository.create({
            ingresos: dataInforme.ingresos,
            egresos: dataInforme.egresos,
        });

        const informeSaved = await informeRepository.save(newInforme);
        return [informeSaved, null];

    } catch (error) {
        console.error("Error creando el informe: ", error);
        return [null, "error interno del servidor"];
    }
}

export async function getInformeService(query) {
    try {
        const { id, ingresos, egresos } = query;

        const informeRepository = AppDataSource.getRepository(Informe);

        const informeFound = await informeRepository.findOne({ 
            where: [ { id: id }, { ingresos: ingresos }, { egresos: egresos } ],
        });

        if(!informeFound) return [null, "Informe no encontrado"];

        const { ...informeData } = informeFound;

        return[informeData, null];
    } catch (error) {
        console.error("Error al obtener el informe: ", error);
        return [null, "Error interno del servidor"];
    }
}

export async function getInformesService() {
    try {
        const informeRepository = AppDataSource.getRepository(Informe);

        const informe = await informeRepository.find();

        if(!informe || informe.length === 0) return [null, "no hay informes"];

        const informeData = informe.map(({ ...informe }) => informe);
        return [informeData, null];
    } catch (error) {
        console.error("Error al obtener los informes: ", error);
        return [null, "Error interno del servidor"];
    }
}

export async function updateInformeService(query, body) {
    try {
        const { id } = query;

        const informeRepository = AppDataSource.getRepository(Informe);
        const informeFound = await informeRepository.findOne({ where: [{ id: id }], });

        if(!informeFound) return [null, "Informe no encontrado"];

        const dataInforme = {
            ingresos: body.ingresos,
            egresos: body. egresos,
            updatedAt: new Date(),
        };


        await informeRepository.update({ id: informeFound.id }, dataInforme);
        const informeData = await informeRepository.findOne({
            where: [{ id: informeFound.id }],
        });
        
        const { ...informeUpdated } = informeData;
        return [informeUpdated, null];

    } catch (error) {
        console.error("Error al actualizar el informe: ", error);
        return [null, "Error interno del servidor"];
    }
}

export async function deleteInformeService(query) {
    try {
        const { id } = query;
        const informeRepository = AppDataSource.getRepository(Informe);
        const informeFound = await informeRepository.findOne({ where: [{ id: id }], });

        const informeDeleted = await informeRepository.remove(informeFound);

        const { ...dataInforme } = informeDeleted;
        
        return [dataInforme, null];

    } catch (error) {
        console.error("Error al eliminar el informe: ", error);
        return [null, "Error interno del servidor"];
    }
}