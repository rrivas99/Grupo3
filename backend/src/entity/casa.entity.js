"use strict";
import { EntitySchema, JoinColumn } from "typeorm";

const CasaSchema = new EntitySchema({
    name: "Casa",
    tableName: "casas",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        direccion: {
            type: "varchar",
            length: 255,
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
            name: "IDX_ID_CASA",
            columns: ["id"],
            unique: true,
        },
        {
            name: "IDX_DIRECCION",
            columns: ["direccion"],
            unique: true,
        },
    ],
});

export default CasaSchema;