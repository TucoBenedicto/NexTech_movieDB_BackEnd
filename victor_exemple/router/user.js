const express =require('express')
const route=express.Router()

const userController=require('../controller/userController')

route.get('/seedusers', userController.seedusers);
route.get('/', userController.index);
route.get('/:id', userController.readone);

module.exports= route
