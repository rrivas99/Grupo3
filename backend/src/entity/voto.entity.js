"use strict";
import { EntitySchema, JoinColumn, Timestamp } from "typeorm";

const VotoSchema = new EntitySchema({
    name: "Voto",
    tableName: "votos",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        pregunta: {
            type: "varchar",
            length: 255,
            nullable: false,
        },
        voto: {
            type: "varchar",
            length: 255,
            nullable: false,
        },
        id_votacion:{
            type: "int",
        },
        rut_user:{
            type: "varchar",
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
        actividad: {
            target: "Actividad",
            type: "many-to-one",
            JoinColumn: {
                name: "votacion",
                referencedColumnName: "id_actividad"
            }
        },
        votante: {
            target: "User",
            type: "many-to-one",
            JoinColumn: {
                name: "user",
                referencedColumnName: "id_user"
            },
        },
    },

    indices: [
        {
            name: "IDX_ID_VOTO",
            columns: ["id_voto"],
            unique: true,
        },
    ],
});

export default VotoSchema;