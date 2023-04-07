// backend.js

// This is a dummy backend code that simply returns a response object
// with a predefined message and timestamp.

const express = require('express')

const app = express();

app.get('/', (req, res) => {
  const response = {
    message: 'Hello from the backend!',
    timestamp: new Date().toISOString()
  };
  res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
