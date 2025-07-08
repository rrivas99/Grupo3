"use strict";
import { EntitySchema, Timestamp } from "typeorm";

const Periodo_directivaSchema = new EntitySchema({
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
            nullable: false,
        },
        fin_periodo: {
            type: "date",
            nullable: false,
        },
    },
    indices: [
        {
            name: "IDX_ID_PERIODO",
            columns: ["id_asistencia"],
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
    ],
});

export default Periodo_directivaSchema;