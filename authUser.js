import passport from "passport";
import Accesstoken from "../../../model/accesstoken.js";
import User from "../../../model/user.js";

export default (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (err, user) => {
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const exist = await Accesstoken.findOne({
      where: {
        token: user.jti,
        isRevoked: false,
        userId: user.userId,
      },
    });

    if (!exist) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Fetch user role
    const authUser = await User.findOne({
      where: { id: user.userId },
    });

    if (!authUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    // req.user = { ...user, role_id: authUser.role_id };
    return next();
  })(req, res, next);
};
