import express from "express";
import asyncHandler from "express-async-handler";
import postController from "./post.controller.js";
import validator from "../common/config/joi-validation.js";
import authUser from "../common/middlewares/authUser.js";

const router = express.Router();

router.post(
    "/create",
    authUser,
    asyncHandler(postController.create)
);

export default router;