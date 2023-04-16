import { RequestHandler } from "express";
import User from "../model/User";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config";

export const SignUp:RequestHandler = async (req,res,next) => {
    try {
        let {name,email,password,confirm_password}:IUserData = req.body;
    const user = await User.findOne({email : email})
    if(user) return next(createHttpError(422,'Email alreday registered with us'))

    const hashedPwd = await bcrypt.hash(password,8)
    const createUser = await User.create({name,email,password:hashedPwd});
    res.status(200).json({
        status : 'success',
        message : 'User created successfully',
        data : createUser
    })
    } catch (error) {
        return next(createHttpError.InternalServerError);  
    }

}

export const Login:RequestHandler =async (req,res,next) => {
    let {email,password} = req.body;

    try{
        /**
         * check if user is not registered
         */
        const user = await User.findOne({email : email})
        if(!user) return next(createHttpError(400,"Email is not registered with us !"))
        /**
         * uncomment when you want to verify user
         */
        // if(!user.isUserVerified) return next(createHttpError(400,"User not verified"))

        const isValidPassword = await bcrypt.compare(password,user.password)
        if(!isValidPassword) return next(createHttpError(400, "Enter a valid password"))

        const token = jwt.sign(
            {user},
            // {
            //     name : user.name,
            //     email : user.email,
            //     id : user._id
            // },
            JWT_KEY,
            {
                expiresIn : "7d"
            }
        )
        res.cookie("jwt",token);
        res.json({
            status : "success",
            message : "Logged in successfully",
            token : token,
            data : user
        })
    }catch(error){
        return next(createHttpError.InternalServerError);
    }

}
