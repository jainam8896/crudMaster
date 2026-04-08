import express from "express";
import dotenv from "dotenv";
import db from "./model/index.js";
import route from "./route/index.js";
import "./src/common/config/jwt-strategy.js"
import adminSeed from "./seeder/admin.js";

dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//routes
app.use('/',route);

//Start the server after DB connection
async function startServer() {
    try {
        await db.sequelize.authenticate();
        console.log('Database Connection Successfully.');

        await db.sequelize.sync();
        console.log('Database Sync.');

        await adminSeed();
        console.log("Admin seeded Successfully");

        app.listen(process.env.PORT, ()=>{
            console.log(`Server Running on port ${process.env.BASE_URL}:${process.env.PORT}`);
        })
    } catch (error) {
        console.error('Database Connection Fail.',error);
    }
}

startServer()
