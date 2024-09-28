import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from'cors'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import taskRoute from './routes/taskRoute.js'



//configure Dotenv
dotenv.config()

//connecting to mongoDB

connectDB()


//instance

const app=express()

//middleware
app.use(cors()) // cors is used to access data to frontend from backend
app.use(morgan('dev')) //http request logger
app.use(express.json())// used to pareze to json bodies

//routes
app.use('/',taskRoute)

app.use('/api/v1/auth', userRoutes)

//rest api
app.get("/",(req,res)=>{
    res.send("Welcome to task management website")
    console.log("Welcomet to task website")
})
//port

const Port=process.env.PORT


//listen
app.listen(Port,()=>{
    console.log(`Server is starting on ${Port}`.bgCyan.white)
}) 