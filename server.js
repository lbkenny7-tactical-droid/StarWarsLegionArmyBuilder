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

app.get('/api/separatist-units', (req, res) => {
  const query = 'SELECT * FROM separatist_units';  // Replace with your actual table name
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }
    res.json(results);  // Send data as JSON
  });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));  // Assumes your HTML is in a 'public' folder

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

fetch('http://localhost:3000/api/separatist-units')
  .then(response => {
    // Check if the response is not OK (e.g., 404 or 500 errors)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
