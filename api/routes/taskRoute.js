import express from 'express'
import { createtask, deleteTask, getTask, getTaskById, updateTask } from '../controllers/taskController.js'

//instance of router

const router=express.Router()

//router || Post

router.post('/task', createtask)


//router || GET

router.get ('/task',getTask)

//router ||Get by id

router.get('/task/:taskId', getTaskById)

//router || update

router.put('/task/:taskId', updateTask)

//router ||delete

router.delete('/task/:taskId',deleteTask)


export default router