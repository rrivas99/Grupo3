"use strict";
import { EntitySchema, JoinColumn } from "typeorm";

const InformeSchema = new EntitySchema({
    name: "Informe",
    tableName: "informes",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        titulo: {
            type: "varchar",
            length: 255,
            nullable: false,
        },
        fecha_informe: {
            type: "timestamp with time zone",
            default: () => "CURRENT_TIMESTAMP",
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
    relations:{
        tesorero: {
            target: "User",
            type: "many-to-one",
            JoinColumn: {
                name: "id_tesorero",
                referencedColumnName: "id_user",
            },
            nullable: false,
            onDelete: "CASCADE",
        },
    },

    indices: [
        {
            name: "IDX_ID_INFORME",
            columns: ["id"],
            unique: true,
        },
        {
            name: "IDX_TITULO",
            columns: ["titulo"],
            unique: false,
        },
        {
            name: "IDX_FECHA_INFORME",
            columns: ["fecha_informe"],
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

export default InformeSchema;