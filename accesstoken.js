import { DataTypes } from "sequelize";
import sequelize from "../src/common/config/connection.js";

const Accesstoken = sequelize.define(
    'accessToken',
    {
        token:{
            type:DataTypes.STRING,
        },
        userId:{
            type:DataTypes.INTEGER,
        },
        isRevoked:{
            type:DataTypes.BOOLEAN,
            defaultValue: false,
        },
        expireAt:{
            type: DataTypes.DATE,
        },
    },
    {
        timestamps:true,
    }
);

export default Accesstoken;