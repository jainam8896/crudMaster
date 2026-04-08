import User from "../../model/user.js";
import authHelper from "../helper/authHelper.js";
import { randomStringGenerator } from "../helper/helper.js";
import getUserResource from "./resources/userResources.js";


class authServices {
    static async register(data) {
        const { fullName, email, password } = data;

        const hashPassword = await authHelper.bcryptPassword(password);

        const user = await User.create({
            fullName,
            email,
            password: hashPassword,
        });

        return {
            ...new getUserResource(user)
        }
    }

    static async login(data) {
        const { email, password } = data;

        const findUser = await User.findOne({ where: { email: email } });
        if (!findUser) {
            throw new Error("User not found with this Email");
        }

        const matchPassword = await authHelper.matchHashPassword(password, findUser.password);
        if (!matchPassword) {
            throw new Error("Invalid email or password");
        }

        const randomString = randomStringGenerator();
        const token = await authHelper.tokenGenerator({
            id: findUser.id,
            jti: randomString,
        });

        const accessToken = await authHelper.storeAccesstoken(findUser, randomString);
        findUser.token = token

        return {
            ...new getUserResource(findUser),
            auth: {
                tokenType: "Bearer",
                accessToken: findUser.token,
                expiresIn: accessToken.expireAt.getTime()
            },
        };
    }
}

export default authServices;