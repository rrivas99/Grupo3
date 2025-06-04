"use strict";
import { EntitySchema } from "typeorm";

const Finanzas_informeSchema = new EntitySchema({
    name: "Finanzas_informe",
    tableName: "finanzas_informes",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        fecha_creacion: {
            type: "date",
            default: () => "CURRENT_DATE",
            nullable: false,
        },
        ingresos: {
            type: "int",
            default: 0,
            nullable: false,
        },
        egresos: {
            type: "int",
            default: 0,
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
            name: "IDX_ID_INFORME",
            columns: ["id"],
            unique: true,
        },
        {
            name: "IDX_FECHA_INFORME",
            columns: ["fecha_creacion"],
            unique: false,
        },
        {
            name: "IDX_INGRESOS",
            columns: ["ingresos"],
            unique: false,
        },
        {
            name: "IDX_EGRESOS",
            columns: ["egresos"],
            unique: false,
        },
    ],
});

export default Finanzas_informeSchema;