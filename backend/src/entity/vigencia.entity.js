"use strict";
import { EntitySchema, JoinColumn, Timestamp } from "typeorm";

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
    relations: {
        id_directiva: {
            target: "User",
            type: "many-to-one",
            JoinColumn: {
                name: "id_directiva",
                referencedColumnName: "id_user"
            },
            nullable: false,
        },
        periodo: {
            target: "Periodo",
            type: "many-to-one",
            JoinColumn: {
                name: "id_periodo",
                referencedColumnName: "id_periodo",
            },
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