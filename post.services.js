import Post from "../../model/post.js";
import getPostResource from "./resources/postResources.js";


class postServices {
    static async create(data, user) {
        const { title } = data;

    const post = await Post.create({
        userId: user.userId,
        title
    });

    return new getPostResource(post);
    }
}

export default postServices;