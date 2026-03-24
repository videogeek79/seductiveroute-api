const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Naughty Navigator API is live');
});

// Example test route
app.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
