"use strict";
import { EntitySchema, JoinColumn } from "typeorm";

const AsistenciaSchema = new EntitySchema({
    name: "Asistencia",
    tableName: "asistencias",
    columns: {
        id_asistencia: {
            type: "int",
            primary: true,
            generated: true,
        },
        presente: {
            type: "boolean",
            default: false,
            nullable: false,
        },
    },

    relations: {
        id_user: {
            target: "User",
            type: "many-to-one",
            JoinColumn: {
                name: "id_user",
                referencedColumnName: "id_user",
            },
            nullable: false,
        },
        id_actividad: {
            target: "Actividad",
            type: "many-to-one",
            JoinColumn: {
                name: "id_actividad",
                referencedColumnName: "id_actividad",
            },
        },
    },

    indices: [
        {
            name: "IDX_PRESENTE",
            columns: ["presente"],
            unique: false,
        },
    ],
});

export default AsistenciaSchema;