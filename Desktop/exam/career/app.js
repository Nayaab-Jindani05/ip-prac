const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors()); // Allow all origins

// Sample articles data
const articles = [
  { id: 1, title: 'Career Planning', description: 'Plan your career effectively.' },
  { id: 2, title: 'Resume Writing', description: 'Write a standout resume.' },
  { id: 3, title: 'Networking Skills', description: 'Build professional networks.' }
];

// GET route to fetch articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// POST route to capture contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received message from ${name} (${email}): ${message}`);
  res.status(200).send({ message: 'Inquiry received!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
