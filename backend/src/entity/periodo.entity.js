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
    indices: [
        {
            name: "IDX_ID_PERIODO",
            columns: ["id_periodo"],
            unique: true,
        },
    ],
});

export default PeriodoSchema;