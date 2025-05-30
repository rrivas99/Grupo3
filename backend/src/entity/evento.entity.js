"use strict";
import { EntitySchema } from "typeorm";

const EventoSchema = new EntitySchema({
  name: "Evento",
  tableName: "eventos",
  columns: {

    id_evento: {
      type: "int",
      primary: true,
      generated: true,
    },

    nombre_evento: {
      type: "varchar",
      length: 255,
      nullable: false,
    },

    fecha_evento: {
      type: "date",
      nullable: false,
    },

    hora_evento: {
      type: "time",
      nullable: false,
    },

    evento_estado: {
        type: "varchar",
        length: 255,
        nullable: false,
        default: "pendiente",
    },
    
  },

  relations: {
    user: {
      target: "User",
      type: "many-to-one",
    },
    asistencia: {
      target: "Asistencia",
      type: "many-to-one",


    },
  },

  indices: [
    {
      name: "IDX_IDEVENTO",
      columns: ["id_evento"],
      unique: true,
    },
    {
      name: "IDX_NOMBREEVENTO",
      columns: ["nombre_evento"],
      unique: false,
    },
    {
      name: "IDX_FECHAEVENTO",
      columns: ["fecha_evento"],
      unique: false,
    },
    {
      name: "IDX_HORAEVENTO",
      columns: ["hora_evento"],
      unique: false,
    },
    {
      name: "IDX_ESTADO",
      columns: ["evento_estado"],
      unique: false,
    },
  ],
});

export default EventoSchema;