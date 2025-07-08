"use strict";
import { EntitySchema } from "typeorm";

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
    indices: [
        {
            name: "IDX_PRESENTE",
            columns: ["presente"],
            unique: false,
        },
    ],
});

export default AsistenciaSchema;