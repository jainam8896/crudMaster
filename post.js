import { DataTypes } from "sequelize";
import sequelize from "../src/common/config/connection.js";

const Post = sequelize.define(
    'post',
    { 
        userId:{
            type:DataTypes.INTEGER,
        },
        title:{
            type:DataTypes.STRING,
        },
    },
    {
        timestamps:true,
    }
);

export default Post;