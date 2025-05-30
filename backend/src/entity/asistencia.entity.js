"use strict";
import { EntitySchema } from "typeorm";

const AsistenciaSchema = new EntitySchema({
  name: "Asistencia",
  tableName: "asistencias",
  columns: {

    presente: {
        type: "boolean",
        default: false,
    },

    id_evento: {
        type: "int",
        nullable: false,
    },

    id_user: {
        type: "int",
        nullable: false,
    },
    
  },

  relations: {

    user: {
        target: "Users",
        rut_vecino: "many-to-one",
        joincolumn: {
        name: "id_user",
        referencedcolumnname: "id_user",
    },
    },

    evento: {
        target: "Eventos",
        idevento: "many-to-one",
        joincolumn: {
            name: "id_evento",
            referencedcolumnname: "id_evento",
        },

    },
    
  },

  indices: [
    {
      name: "IDX_PRESENTE",
      columns: ["presente"],
      unique: false,
    },
    {
      name: "IDX_NOMBREEVENTO",
      columns: ["nombreevento"],
      unique: false,
    },
    {

    },
  ],
});

export default AsistenciaSchema;