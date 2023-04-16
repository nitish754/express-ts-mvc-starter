import { RequestHandler } from "express";
import validator from "../utils/validator";
import { UserSchema } from "./UserSchema";

export const SignupValidation: RequestHandler = (req,res,next) => {
    validator(UserSchema.signupPayload,req.body,next)
}

export const LoginValidation: RequestHandler = (req,res,next) => {
    validator(UserSchema.loginPayload,req.body,next)
}

