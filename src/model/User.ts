import {Schema,Document,model} from 'mongoose'

export interface IUser extends Document{
    name : string,
    email : string,
    mobile : string,
    password : string,
    verifyToken : string,
    isUserVerified : boolean
}

const UserSchema:Schema = new Schema({
    name : {
        type :String,
        default : null
    },
    email :{
        type : String,
        unique : true
    },
    mobile : {
        type  : String,
        default : null
    },
    password : {
        type : String,
        default : null
    },
    verifyToken : {
        type : String,
        default : null
    },
    isUserVerified : {
        type : Boolean,
        default : false
    }
})

export default model<IUser>("User",UserSchema)