import { DataTypes } from "sequelize";
import sequelize from "../src/common/config/connection.js";

const User = sequelize.define(
    'users',
    {
        fullName:{
            type:DataTypes.STRING,
        },
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

export default User;