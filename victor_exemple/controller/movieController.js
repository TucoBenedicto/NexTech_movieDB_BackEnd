const db=require('../databases/connection')
const {faker}= require('@faker-js/faker')



exports.seedmovies=(req,res)=>{
   for(let index=0; index<10;index++){
      db.query(`INSERT INTO movie(title, overview)value("${faker.lorem.word()}","${faker.lorem.paragraph()}")`)
  
     }

     res.status(200).json({message:'ok'})
  
 }
 
 
 exports.create=(req,res)=>{
   console.log("req",req.body)
   db.query('INSERT INTO movie (title, overview) VALUES (?, ?)', [req.body.title, req.body.overview], function(err, field) {
       if (!err) {
           res.status(202).json({message:field});
           
       }else{
       
           res.status(500).json({message:err});

       }
 
       // Renvoyer une réponse indiquant que l'opération a réussi
      
   });

   
}
exports.index=(req,res)=>{
 
   

   db.query('SELECT * FROM movie', function(err, rows) {
     if (err) {
         console.error(err);
         return res.status(500).send("Erreur lors de la récupération des articles");
     }
 
     
     res.json(rows);
 });
    
 }


 exports.readone=(req,res)=>{
   const id=req.params.id
   
   db.query(`SELECT * FROM movie WHERE id_movies = "${id}"`, function(err, rows) {
     if (err) {
         console.error(err);
         return res.status(500).send("Erreur lors de la récupération des articles");
     }
 
     
     res.json(rows);
 });
    
 }