export const JWT = {
    SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};

export const BCRYPT = {
    SALT_ROUND: 12,
}