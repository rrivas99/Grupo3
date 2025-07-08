"use strict";
import { EntitySchema, JoinColumn, Timestamp } from "typeorm";

const VotoSchema = new EntitySchema({
    name: "Voto",
    tableName: "votos",
    columns: {
        id_voto: {
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
        {
            name: "IDX_PREGUNTA",
            columns: ["pregunta"],
            unique: false,
        },
        {
            name: "IDX_VOTO",
            columns: ["voto"],
            unique: false,
        },
    ],
});

export default VotoSchema;