import Joi from "joi";

export const regDto = Joi.object().keys({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password:Joi.string().required(),
});


export const login = Joi.object().keys({
    email: Joi.string().email().required(),
    password:Joi.string().required(),
});