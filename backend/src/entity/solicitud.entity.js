"use strict";
import { EntitySchema, JoinColumn } from "typeorm";

const SolicitudSchema = new EntitySchema({
    name: "Solicitud",
    tableName: "solicitudes",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        tipo_solicitud: {
            type: "enum",
            enum: ["reclamo", "sugerencia", "documentacion"],
            nullable: false,
        },
        texto_solicitud: {
            type: "varchar",
            length: 512,
            nullable: false,
        },
        estado: {
            type: "enum",
            enum: ["pendiente", "resuelto"],
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
        vecino: {
            target: "User",
            type: "many-to-one",
            JoinColumn: {
                name: "id_vecino",
                referencedColumnName: "id_user"
            },
        },
    },
    indices: [
        {
            name: "IDX_ID_solicitud",
            columns: ["id_solicitud"],
            unique: true,
        },
    ],
});

export default SolicitudSchema;