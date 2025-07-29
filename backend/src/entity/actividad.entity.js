"use strict";
import { EntitySchema, JoinColumn } from "typeorm";

const ActividadSchema = new EntitySchema({
    name: "Actividad",
    tableName: "actividades",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        nombre: {
            type: "varchar",
            length: 255,
            nullable: false,
        },
        tipo: {
            type: "varchar",
            enum: ["asamblea",
                   "votacion", 
                   "reunion", 
                   "fiesta", 
                   "bingo", 
                   "colecta", 
                   "rifa"],
            nullable: false,
        },
        fecha: {
            type: "date",
            nullable: false,
            default: () => "CURRENT_DATE",
        },
        hora: {
            type: "time",
            nullable: false,
            default: () => "CURRENT_TIME",
        },
        estado: {
            type: "enum",
            enum: ["pendiente", "realizada", "cancelada"],
            default: "pendiente",
            nullable: false,
        },
        createdAt: {
            type: "timestamp with time zone",
            default: () => "CURRENT_TIMESTAMP",
            nullable: false,
        },
        updatedAt: {
            type: "timestamp with time zone",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
            nullable: false,
        },
    },

    relations: {
        asistencia: {
            target: "Asistencia",
            type: "one-to-many",
            inverseSide: "id_actividad",
        },
        resumen_actividad: {
            target: "Resumen_Actividad",
            type: "one-to-one",
            inverseSide: "actividad"
        },
        votacion: {
            target: "Voto",
            type: "one-to-many",
            inverseSide: "actividad"
        }
    },
    indices: [
        {
            name: "IDX_ID_ACTIVIDAD",
            columns: ["id_actividad"],
            unique: true,
        },
    ],
});

export default ActividadSchema;