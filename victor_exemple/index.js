
const express =require('express')
const app=express()
app.use(express.json())
const dotenv =require('dotenv')
dotenv.config()
const port=process.env.PORT
const movie=require('./router/movie')
const user=require('./router/user')
const like=require('./router/like')

app.use('/likes',likes)
app.use('/movies',movie)
app.use('/users',user)
app.get('/',(req,res)=>{
    res.json({message:'hello from server'})
})
app.listen(port,()=>{
    console.log('appl listen to port :',port)
})