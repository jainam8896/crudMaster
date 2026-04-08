import express from "express";
import AuthRoute from "../src/auth/auth.route.js";
import postRoute from "../src/post/post.route.js"

const router = express.Router();

router.use("/auth", AuthRoute);
router.use("/post", postRoute)

export default router;