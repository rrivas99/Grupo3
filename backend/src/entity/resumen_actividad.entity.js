"use strict";
import { EntitySchema, Timestamp } from "typeorm";

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
            name: "IDX_RESUMEN_ACTIVIDAD",
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