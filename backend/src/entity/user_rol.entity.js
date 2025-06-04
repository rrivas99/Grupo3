"use strict";
import { EntitySchema } from "typeorm";

const User_rolSchema = new EntitySchema({
    name: "User_rol",
    tableName: "user_roles",
    columns: {
        id_user_rol: {
            type: "int",
            primary: true,
            generated: true,
        },
        nombre_user_rol: {
            type: "varchar",
            length: 255,
            nullable: false,
        },
    },
    indices: [
        {
            name: "IDX_USER_ROL",
            columns: ["id_user_rol"],
            unique: true,
        },
        {
            name: "IDX_NOMBRE_USER_ROL",
            columns: ["nombre_user_rol"],
            unique: true,
        },
    ],
});

export default User_rolSchema;