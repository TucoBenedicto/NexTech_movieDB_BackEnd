const express =require('express')
const route=express.Router()
const {faker}= require('@faker-js/faker')
const db=require('../databases/connection')
const movieController=require('../controller/movieController')

route.get('/seedmovies', movieController.seedmovies);
route.post('/create', movieController.create);
route.get('/', movieController.index);
route.get('/:id', movieController.readone);






module.exports= route