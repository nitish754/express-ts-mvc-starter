import {Schema,model,Document} from 'mongoose'

export interface ITask extends Document {
    title : string,
    description : string,
    due_date : string
}

const TaskSchema :Schema = new Schema({
    title : {
        type : String,
        default : null
    },
    description : {
        type : String,
        default : null,
    },
    due_date : {
        type : Date,
        default : null
    }
},
{
    timestamps : true,
    versionKey : false
}
);

export default model<ITask>("Task",TaskSchema)