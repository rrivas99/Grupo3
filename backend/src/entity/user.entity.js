"use strict";
import { EntitySchema, JoinColumn } from "typeorm";

const UserSchema = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id_user: {
      type: "int",
      primary: true,
      generated: true,
    },
    nombreCompleto: {
      type: "varchar",
      length: 255,
      nullable: false,
    },
    rut: {
      type: "varchar",
      length: 12,
      nullable: false,
      unique: true,
    },
    email: {
      type: "varchar",
      length: 255,
      nullable: false,
      unique: true,
    },
    rol: {
      type: "enum",
      enum: ["administrador", "presidente", "tesorero", "secretario", "vecino"],
      nullable: false,
      default: "vecino",
    },
    password: {
      type: "varchar",
      nullable: false,
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
    informes: {
      target: "Informe",
      type: "one-to-many",
      inverseSide: "id_tesorero",
    },
    reclamos:{
      target: "Reclamo",
      type: "one-to-many",
      inverseSide: "id_vecino",
    },
    vigente:{
      target: "Vigencia",
      type: "one-to-many",
      inverseSide: "id_directiva"
    },
  },

  indices: [
    {
      name: "IDX_USER",
      columns: ["id_user"],
      unique: true,
    },
    {
      name: "IDX_USER_RUT",
      columns: ["rut"],
      unique: true,
    },
    {
      name: "IDX_USER_EMAIL",
      columns: ["email"],
      unique: true,
    },
  ],
});

export default UserSchema;