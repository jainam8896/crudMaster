import express from "express";
import asyncHandler from "express-async-handler";
import authController from "./auth.controller.js";
import validator from "../common/config/joi-validation.js";
import { regDto, login } from "./dtos/auth.dtos.js";

const router = express.Router();

router.post(
    "/register",
    validator.body(regDto),
    asyncHandler(authController.register)
);

router.post(
    "/login",
    validator.body(login),
    asyncHandler(authController.login)
)


export default router;