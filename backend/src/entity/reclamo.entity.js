"use strict";
import { EntitySchema } from "typeorm";

const ReclamoSchema = new EntitySchema({
    name: "Reclamo",
    tableName: "reclamos",
    columns: {
        id_reclamo: {
            type: "int",
            primary: true,
            generated: true,
        },
        texto_reclamo: {
            type: "varchar",
            length: 512,
            nullable: false,
        },
        fecha_reclamo: {
            type: "timestamp with time zone",
            default: ()=>"CURRENT_TIMESTAMP"
        },
        resuelto: {
            type: "boolean",
            default: false,
            nullable: false,
        },
        texto_resolucion: {
            type: "varchar",
            length: 512,
        },
        fecha_resolucion: {
            type: "timestamp with time zone",
            default: ()=>"CURRENT_TIMESTAMP",
        },
    },
    indices: [
        {
            name: "IDX_ID_RECLAMO",
            columns: ["id_reclamo"],
            unique: true,
        },
        {
            name: "IDX_TEXTO_RECLAMO",
            columns: ["texto_reclamo"],
            unique: false,
        },
        {
            name: "IDX_FECHA_RECLAMO",
            columns: ["fecha_reclamo"],
            unique: false,
        },
        {
            name: "IDX_RESUELTO",
            columns: ["resuelto"],
            unique: false,
        },
        {
            name: "IDX_TEXTO_RESOLUCION",
            columns: ["texto_resolucion"],
            unique: false,
        },
        {
            name: "IDX_FECHA_RESOLUCION",
            columns: ["fecha_resolucion"],
            unique: false,
        },
    ],
});

export default ReclamoSchema;