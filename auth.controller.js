import authServices from "./auth.services.js";
import { SuccessResponceHandle } from "../helper/helper.js";

class authController {
    static async register (req, res){
        const data = await authServices.register(req.body);
        return res.send(SuccessResponceHandle(201, "Registration Successfull", data));
    }

    static async login(req, res) {
        try {
            const result = await authServices.login(req.body);
    
            return res.status(200).json({
                success: true,
                message: "Login successful",
                data: result
            });
    
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
}

export default authController