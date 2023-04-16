import Joi from 'joi'

export const TaskSchema = {
    addTaskPayload : Joi.object({
        title : Joi.string().required().label('Title'),
        description : Joi.string().required().min(10).label('Description'),
        due_date : Joi.string().required().label('Due Date')
    })   
}