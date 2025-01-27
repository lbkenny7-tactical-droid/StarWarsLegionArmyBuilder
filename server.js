const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');  // Import the cors package
const app = express();
const port = 3000;

// Use the CORS middleware
app.use(cors());  // This allows all origins. You can customize it below.

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: 'Burrnet7', // Your MySQL password
  database: 'starwarslegion_database'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('error connecting to the database: ' + err.stack);
    return;
  }
  console.log('connected to the database as id ' + db.threadId);
});

// Route to fetch data from 'Units' table
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM Separatist_Units';  // Fetch all rows from the "Units" table
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data: ', err);
      return res.status(500).send('Error fetching data');
    }
    res.json(results);  // Send the results as a JSON response
  });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));  // Assumes your HTML is in a 'public' folder

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});