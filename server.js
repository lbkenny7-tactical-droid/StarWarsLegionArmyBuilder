const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Burrnet7',
  database: 'starwarslegion_database'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting to the database: ' + err.stack);
    return;
  }
  console.log('connected to the database as id ' + db.threadId);
});

app.get('/api/separatist-units', (req, res) => {
  const query = 'SELECT * FROM separatist_units';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }
    res.json(results);
  });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

fetch('http://localhost:3000/api/separatist-units')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
