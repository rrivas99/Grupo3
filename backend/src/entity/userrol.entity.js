"use strict";
import { EntitySchema } from "typeorm";

const UserrolSchema = new EntitySchema({
  name: "Userrol",
  tableName: "userroles",
  columns: {
    id_userrol: {
      type: "int",
      primary: true,
      generated: true,
    },
    nombre_userrol: {
      type: "varchar",
      length: 255,
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
    users: {
            target: "id_user",
            type: "one-to-many",
            inverseSide: "userrol"
        },
  },

  indices: [
    {
      name: "IDX_USERROL",
      columns: ["id_userrol"],
      unique: true,
    },

    {
        name: "IDX_NOMBRE_USERROL",
        columns: ["nombre_userrol"],
    },

  ],
});

export default UserrolSchema;