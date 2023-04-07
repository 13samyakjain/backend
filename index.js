const express = require('express');
const app = express();
const port = 5005;

app.get('/', (req, res) => {
  res.send({ id: 1 });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
