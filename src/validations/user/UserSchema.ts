import Joi from "joi";

export const UserSchema = {
    signupPayload : Joi.object({
        name : Joi.string().required().label('Name'),
        email : Joi.string().email().required().label('Email'),
        password : Joi.string().required().label('Password')
    }),
    loginPayload : Joi.object({
        email : Joi.string().email().required().label('Email'),
        password : Joi.string().required().label('Password')
    })
}