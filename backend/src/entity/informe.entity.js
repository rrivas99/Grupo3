"use strict";
import { EntitySchema } from "typeorm";

const InformeSchema = new EntitySchema({
  name: "Informe",
  tableName: "informes",
  columns: {
    id_informe: {
      type: "int",
      primary: true,
      generated: true,
    },
    informe_beneficios: {
      type: "int",
      default: 0,
      nullable: false,
    },
    informe_perdidas :{
      type: "int",
      default:0,
      nullable: false,
    },
    informe_fecharegistro: {
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
    user: {
            target: "id_user",
            type: "many-to-one",
            joinTable: true,
            cascade: true,
        },
  },

  indices: [
    {
      name: "IDX_REPORTE",
      columns: ["idreporte"],
      unique: true,
    },

    {
        name: "IDX_FECHA_REGISTRO",
        columns: ["fecharegistro"]
    },

  ],
});

export default InformeSchema;