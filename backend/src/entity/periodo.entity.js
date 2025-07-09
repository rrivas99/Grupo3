"use strict";
import { EntitySchema, Timestamp } from "typeorm";

const PeriodoSchema = new EntitySchema({
    name: "Periodo",
    tableName: "periodos",
    columns: {
        id_periodo: {
            type: "int",
            primary: true,
            generated: true,
        },
        inicio_periodo: {
            type: "date",
            default: ()=> "CURRENT_DATE",
            nullable: false,
        },
        fin_periodo: {
            type: "date",
            default: ()=> "CURRENT_DATE",
            nullable: false,
        },
        fecha_definicion: {
            type: "timestamp with time zone",
            default: ()=> "CURRENT_TIMESTAMP",
            nullable: false,
        },
    },
    indices: [
        {
            name: "IDX_ID_PERIODO",
            columns: ["id_periodo"],
            unique: true,
        },
        {
            name: "IDX_INICIO_PERIODO",
            columns: ["inicio_periodo"],
            unique: false,
        },
        {
            name: "IDX_FIN_PERIODO",
            columns: ["fin_periodo"],
            unique: false,
        },
        {
            name: "IDX_FECHA_DEFINICION",
            columns: ["fecha_definicion"],
            unique: false,
        },
    ],
});

export default PeriodoSchema;