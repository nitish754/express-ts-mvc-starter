import express from 'express'
import createHttpError from 'http-errors'
import router from './routes/routes'
import mongoose from 'mongoose'
import { DB, PORT } from './config'
import { errorHandler } from './middleware/errorHandler'
import passport from 'passport'
import Mpassport from './middleware/passport'
import cookieParser from "cookie-parser";

const app = express()

app.get("/", (req,res,next) => {
    res.json({
        message : "Welcome to my first Express server"
    })
})
app.use(express.json())
app.use(passport.initialize())
Mpassport(passport);
app.use(cookieParser())
app.use("/api",router);

app.use(()=>{
    throw createHttpError(404, 'Route not found')
})
app.use(errorHandler);

// connect to database 
mongoose.connect(DB)
.then(() => {
    console.log("connected to Database")
    app.listen(PORT, () => {
        console.log(`server running on ${PORT}`);
    })
})
.catch(() => {
    throw createHttpError(501,"Unable to connect to database")
})