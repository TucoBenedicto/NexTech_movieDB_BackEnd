const Pool = require("pg").Pool;
const fetch = require("node-fetch");

const fs = require("fs");
const { log } = require("console");

const pool = new Pool({
  user: "karim",
  host: "localhost",
  database: "moviedb",
  password: "admin",
  port: 5432,
});

//** Appel de l'api + mis en

const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2E0Mzk3NzA4NWU4YzZjNjM3NzM3MTdmODM1ZGJlOSIsInN1YiI6IjY1NzFjZTQ0ODg2MzQ4MDExZGEwYzIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p0TMzk7omlTdJOm2Dqlkcokqi7QBN__-W2SOXjnZPNM",
  },
};

const fetchData = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    //console.log("Parsed data:", data);

    // Utilisez directement data ici ou passez-le à d'autres fonctions
    autreFonction(data);
  } catch (error) {
    console.error("Error during fetchData:", error);
  }
};

// Utilisez fetchData pour récupérer les données
fetchData();

// Fonction pour utiliser les données dans un autre endroit du code
function autreFonction(data) {
  console.log("Data in another part of the code:", data);

  // Vous pouvez faire d'autres opérations avec data ici
}


/*   async function insertData() {
    //const [name, color] = process.argv.slice(2);
    const res = await pool.query(
        "INSERT INTO shark (name, color) VALUES ($1, $2)",
        [name, color]
      );
    console.log(`Added a shark with the name ${name}`);
  }
   */

// Define a route to fetch and store data
/* app.get('/fetch', async (req, res) => {
  try {
    // Make a request to the API
    const apiResponse = await axios.get('https://api.example.com/data');

    // Assuming the API response is an array of objects
    const apiData = apiResponse.data;

    // Save each object in the database
    //for (const item of apiData) {
     // await Data.create(item);
    //}

console.log();


    res.send('Data successfully fetched and stored in the database.');
  } catch (error) {
    console.error('Error fetching and storing data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});
 */

const getUsers = (request, response) => {
  pool.query('SELECT * FROM "user"', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  //insertData,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
