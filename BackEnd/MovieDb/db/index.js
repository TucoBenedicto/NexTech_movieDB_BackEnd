//const mysql = require('mysql2');
const fs = require("fs");
//const bcrypt = require('bcryptjs');
//require('dotenv').config();

const Pool = require("pg").Pool;

// Read SQL seed query
const seedQuery = fs.readFileSync("db/seed.sql", {
  encoding: "utf-8",
});

const pool = new Pool({
  user: "karim",
  host: "localhost",
  database: "moviedb",
  password: "admin",
  port: 5432,
});

pool.connect();

console.log("Running SQL seed...");

//  seed query
 pool.query(seedQuery, (err) => {
  if (err) {
    throw err;
  }

  console.log("SQL seed completed!");
  pool.end();
}); 



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//envoi de donéne factice
// Run seed data api from Moviedb

//  const firstName = 'John';
//const lastName = 'Doe';
//const query = `INSERT INTO "user" (firstName, lastName) VALUES ('${firstName}', '${lastName}')`;
const query = `INSERT INTO "user" ("fistName", "lastName") VALUES ('Richaendricks', 'richardom');`;

pool.query(query, (err) => {
  if (err) {
    throw err;
  }

  console.log("SQL DATA OK!");
  pool.end();
});


/* async function insertData2() {
  //const [name, color] = process.argv.slice(2);
  try {
    await pool.query(
      'INSERT INTO "user" ("firstName", "lastName") VALUES (\'Richaendricks\', \'richardom\');'
    );
    console.log(`Added a shark with the name`);
  } catch (error) {
    console.error(error);
  }
}

insertData();
insertData2();
 */