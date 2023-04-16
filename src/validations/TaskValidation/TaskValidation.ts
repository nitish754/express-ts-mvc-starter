import { RequestHandler } from "express";
import validator from "../utils/validator";
import { TaskSchema } from "./TaskSchema";

export const AddTaskValidation:RequestHandler = (req,res,next) => {
    validator(TaskSchema.addTaskPayload,req.body,next)
}