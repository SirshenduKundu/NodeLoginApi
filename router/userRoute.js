const express = require('express')

const userRouter = express.Router()
const userController=require('../controller/userController')

userRouter.post('/regitration',userController.postregistration)
userRouter.post('/login',userController.postlogin)









module.exports = userRouter