const db=require('../databases/connection')
const {faker}= require('@faker-js/faker')

exports.seedusers=(req,res)=>{
  console.log("fdjfdj")
  for(let index=0; index<10;index++){

    db.query(`INSERT INTO users (nom,prenom)value("${faker.person.lastName()}","${faker.person.firstName()}")`)
 
 
   }
   res.status(200).json({message:'ok'})
 
}

exports.index=(req,res)=>{
 
   

  db.query('SELECT * FROM users', function(err, rows) {
    if (err) {
        console.error(err);
        return res.status(500).send("Erreur lors de la récupération des articles");
    }

    
    res.json(rows);
});
   
}



exports.readone=(req,res)=>{
  const id=req.params.id
  
  db.query(`SELECT * FROM users WHERE id_user = "${id}"`, function(err, rows) {
    if (err) {
        console.error(err);
        return res.status(500).send("Erreur lors de la récupération des articles");
    }

    
    res.json(rows);
});
   
}



