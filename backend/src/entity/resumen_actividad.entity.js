"use strict";
import { EntitySchema, JoinColumn, Timestamp } from "typeorm";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute.js";

const Resumen_ActividadSchema = new EntitySchema({
    name: "Resumen_Actividad",
    tableName: "resumen_actividades",
    columns: {
        id_resumen: {
            type: "int",
            primary: true,
            generated: true,
        },
        titulo: {
            type: "varchar",
            length: 255,
            nullable: false,
        },
        nombre_archivo: {
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

    relations: {
        actividad: {
            target: "Actividad",
            type: "one-to-one",
            JoinColumn: {
                name: "id_actividad",
                referencedColumnName: "id_actividad"
            }
        },
        secretario: {
            target: "User",
            type: "many-to-one",
            JoinColumn: {
                name: "id_secretario",
                referencedColumnName: "id_user"
            },
        }
    },

    indices: [
        {
            name: "IDX_ID_RESUMEN",
            columns: ["id_resumen"],
            unique: true,
        },
    ],
});

export default Resumen_ActividadSchema;