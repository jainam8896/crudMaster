import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { JWT } from "../constant/constant.js";
import Accesstoken from "../../../model/accesstoken.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT.SECRET,
};

passport.use(
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await Accesstoken.findOne({
        where: {
          userId: jwtPayload.id,
          token: jwtPayload.jti,
        },
      });

      if (!user) {
        return done(null, false);
      }
      return done(null, { userId: jwtPayload.id, jti: jwtPayload.jti });
    } catch (error) {
      return done(error, false);
    }
  })
);
