import { RequestHandler } from "express";
import TaskModel from '../model/Task';
import createHttpError from 'http-errors'

export const getExample: RequestHandler = (req,res,next) => {
    res.json({
        message : "Your Project setup is done"
    });
}

export const getExample2 : RequestHandler = (req,res,next) => {
    res.status(200).json({
        message : "Your second route is working"
    })
}

export const addTask : RequestHandler = async (req,res,next) => {
    try {
        let {title, description, due_date}:ITaskData = req.body;
    const createTask = await TaskModel.create({
        title : title,
        description : description,
        due_date : due_date
    })
    res.json({
        message : "Task Added Successfully",
        data : createTask
    })
    } catch (error) {
        return next(createHttpError.InternalServerError);
    }
    
}