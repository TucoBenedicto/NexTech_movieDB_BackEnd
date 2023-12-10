const express =require('express')
const route=express.Router()
const {faker}= require('@faker-js/faker')
const db=require('../databases/connection')
const likeController=require('../controller/likeController')


route.get('/movie/id/user/:id', likeController.like);







module.exports= route