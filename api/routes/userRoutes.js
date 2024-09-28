import express from 'express'
import { registerController,loginController } from '../controllers/userController.js'

//router object

const router =express.Router()

//Register controller || Post

router.post("/register",registerController)

//Login route ||Post

router.post("/login",loginController)

export default router