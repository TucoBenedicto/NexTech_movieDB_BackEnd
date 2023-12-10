const mysql=require('mysql2')
const connectionDB=mysql.createPool({
    hostname: process.env.HOSTNAME,
    user:  process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
})

connectionDB.getConnection((err,conn)=>{
    if(!err){
        console.log('connecté a la bdd')
    }else{
        console.log(err)
    }
})

module.exports= connectionDB