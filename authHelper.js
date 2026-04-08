import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { BCRYPT, JWT } from "../common/constant/constant.js";
import moment from "moment";
import Accesstoken from "../../model/accesstoken.js";

class authHelper {

    static async bcryptPassword(password) {
        const hashPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, BCRYPT.SALT_ROUND, (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            });
        });
        return hashPassword;
    }

    static async tokenGenerator(data) {
        return await jwt.sign(data, JWT.SECRET, { expiresIn: JWT.EXPIRES_IN });
    }

    static async storeAccesstoken(user, cryptoString) {
        const expireAt = moment(new Date())
            .utc()
            .add(1, "years")
            .format("YYYY-MM-DD hh:mm:ss");

        const data = await Accesstoken.create({
            token: cryptoString,
            userId: user.id,
            expireAt: expireAt,
        });
        return data;
    }


    static async matchHashPassword(password, userPassword){
        const hashPassword = await new Promise((resolve, reject) => {
            bcrypt.compare(password, userPassword, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
        return hashPassword;
    }
}

export default authHelper;