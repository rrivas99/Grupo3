"use strict";
import { EntitySchema, JoinColumn } from "typeorm";

const ActividadSchema = new EntitySchema({
    name: "Actividad",
    tableName: "actividades",
    columns: {
        id_actividad: {
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
            enum: ["votacion", "reunion", "fiesta", "bingo", "colecta", "rifa"],
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
        realizada:{
            type: "boolean",
            default: false,
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
        {
            name: "IDX_NOMBRE_ACTIVIDAD",
            columns: ["nombre"],
            unique: false,
        },
        {
            name: "IDX_TIPO_ACTIVIDAD",
            columns: ["tipo"],
            unique: false,
        },
        {
            name: "IDX_FECHA_ACTIVIDAD",
            columns: ["fecha"],
            unique: false,
        },
        {
            name: "IDX_HORA_ACTIVIDAD",
            columns: ["hora"],
            unique: false,
        },
        {
            name: "IDX_ESTADO_ACTIVIDAD",
            columns: ["estado"],
            unique: false,
        },
        {
            name: "IDX_REALIZADA",
            columns: ["realizada"],
            unique: false,
        },
    ],
});

export default ActividadSchema;