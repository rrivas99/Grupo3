"use strict";
import { EntitySchema, Timestamp } from "typeorm";

const VigenciaSchema = new EntitySchema({
    name: "Vigencia",
    tableName: "vigencias",
    columns: {
        id_vigencia: {
            type: "int",
            primary: true,
            generated: true,
        },
        vigente: {
            type: "boolean",
            default: true,
            nullable: false,
        },
    },
    indices: [
        {
            name: "IDX_VIGENTE",
            columns: ["vigente"],
            unique: false,
        },
    ],
});

export default VigenciaSchema;