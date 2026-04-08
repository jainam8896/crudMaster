import express from "express";
import apiroute from "./api.js"

const router = express.Router();

router.use("/api/v1", apiroute);

export default router;