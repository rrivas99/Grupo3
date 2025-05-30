"use strict";
import { EntitySchema } from "typeorm";

const TipoeventoSchema = new EntitySchema({
  name: "Tipoevento",
  tableName: "tipoeventos",
  columns: {

    id_tipo_evento: {
        type: "int",
        primary: true,
        generated: true,
    },

    nombre_tipoevento: {
      type: "varchar",
      length: 255,
      nullable: false,
    },
    
    id_evento: {
      type: "int"
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
    
    vecino: {
        target: "Vecinos",
        rut_vecino: "many-to-one",
        joincolumn: {
        name: "rut_vecino",
        referencedcolumnname: "rut_vecino",
    },
    },

    evento: {
        target: "Eventos",
        idevento: "one-to-many",
        
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
      name: "IDX_FECHAEVENTO",
      columns: ["fechaevento"],
      unique: false,
    },
    {
      name: "IDX_HORAEVENTO",
      columns: ["horaevento"],
      unique: false,
    },
  ],
});

export default TipoeventoSchema;