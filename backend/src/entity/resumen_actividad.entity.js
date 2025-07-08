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
        texto: {
            type: "varchar",
            default: true,
            nullable: false,
        },
    },
    indices: [
        {
            name: "IDX_ID_RESUMEN",
            columns: ["id_resumen"],
            unique: true,
        },
        {
            name: "IDX_TEXTO",
            columns: ["texto"],
            unique: false,
        },
    ],
});

export default Resumen_ActividadSchema;