"use strict";
import { EntitySchema } from "typeorm";

const Tipo_actividadSchema = new EntitySchema({
    name: "Tipo_actividad",
    tableName: "tipo_actividades",
    columns: {
        id_tipo_actividad: {
            type: "int",
            primary: true,
            generated: true,
        },
        nombre_tipo_actividad: {
            type: "varchar",
            length: 255,
            nullable: false,
        },
    },
    indices: [
        {
            name: "IDX_ID_TIPO_ACTIVIDAD",
            columns: ["id_tipo_actividad"],
            unique: true,
        },
        {
            name: "IDX_NOMBRE_TIPO_ACTIVIDAD",
            columns: ["nombre_tipo_actividad"],
            unique: true,
        },
    ],
});

export default Tipo_actividadSchema;