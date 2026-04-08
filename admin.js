import { DataTypes } from "sequelize";
import sequelize from "../src/common/config/connection.js";

const Admin = sequelize.define(
    'admin',
    {
        email:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING,
        },
    },
    {
        timestamps:true,
    }
);

export default Admin;