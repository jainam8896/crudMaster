import postServices from "./post.services.js";
import { SuccessResponceHandle } from "../helper/helper.js";

class postController {
    static async create (req, res){
        const data = await postServices.create(req.body, req.user);
        return res.send(SuccessResponceHandle(201, "Post Created Successfull", data));
    }
}

export default postController