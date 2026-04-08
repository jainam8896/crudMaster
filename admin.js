import bcrypt from "bcrypt";
import Admin from "../model/admin.js";

const adminSeed = async () => {
  const defaultEmail = "admin123@yopmail.com";
  const exists = await Admin.findOne({ where: { email: defaultEmail } });

  if (!exists) {
    const hashed = await bcrypt.hash("Admin@123", 10);
    await Admin.create({
      email: defaultEmail,
      password: hashed,
    });
  }
};

export default adminSeed;
