"use strict";
import Actividad from "../entity/actividad.entity.js";
import { AppDataSource } from "../config/configDb.js";

export async function createActividadService(dataActividad) {
    try {
        const actividadRepository = AppDataSource.getRepository(Actividad);


        const newActividad = actividadRepository.create({
            nombre: dataActividad.nombre,
            fecha: dataActividad.fecha,
            hora: dataActividad.fecha,
            estado: dataActividad.estado,
            realizada: dataActividad.realizada
        });

        const actividadCreated = await actividadRepository.save(newActividad);
        return [actividadCreated, null];

    } catch (error) {
        console.error("Error al crear una nueva actividad:", error);
        return [null, "Error interno del servidor"];
    }
}

export async function getActividadService(query) {
    try {
        const { id } = query;
        const actividadRepository = AppDataSource.getRepository(Actividad);
        const actividadFound = await actividadRepository.findOne({
            where: [{ id: id }],
        });

        if(!actividadFound) return [null, "Actividad no encontrada"];
        const { ...actividadData } = actividadFound;

        return [actividadData, null];
    } catch (error) {
        console.error("Error al obtener las actividades:", error);
        return [null, "Error interno del servidor"];
    }
}

export async function getActividadesService() {
    try {
        const actividadRepository = AppDataSource.getRepository(Actividad);
        const actividad = await actividadRepository.find();
        if(!actividad || actividad.length === 0) return [null, "No hay actividades inscritas"];
        const actividadData = actividad.map(({ ...actividad }) => actividad);

        return [actividadData, null];
    } catch (error) {
        console.error("Error al obtener las actividades:", error);
        return [null, "Error interno del servidor"];
    }
}

export async function updateActividadService(query, body) {
    try {
        const { id } = query;

        const actividadRepository = AppDataSource.getRepository(Actividad);

        const actividadFound = await actividadRepository.findOne({ where: [{ id: id }], });
        if (!actividadFound) return [null, "Actividad no encontrada"];

        const dataActividad = {
            nombre: body.nombre,
            fecha: body.fecha,
            hora: body.hora,
            estado: body.estado,
            realizada: body.realizada,
            updatedAt: new Date(),
        };

        await actividadRepository.update({ id: actividadFound.id }, dataActividad);
        const actividadData = await actividadRepository.findOne({ where: [{ id: actividadFound.id }] });

        if(!actividadData) return [null, "Actividad no encontrada despues de actualizar"];
        const { ...actividadUpdated } = actividadData;

        return [actividadUpdated, null];
    } catch (error) {
        console.error("Error al actualizar la actividad:", error);
        return [null, "Error interno del servidor"];
    }
}

export async function deleteActividadService(query) {
    try {
        const { id } = query;
        const actividadRepository = AppDataSource.getRepository(Actividad);
        const actividadFound = await actividadRepository.findOne({ where: { id: id } });

        const actividadDeleted = await actividadRepository.remove(actividadFound);

        const { ...dataActividad } = actividadDeleted;
        return [dataActividad, null];
    } catch (error) {
        console.error("Error al eliminar la actividad:", error);
        return [null, "Error interno del servidor"];
    }
}