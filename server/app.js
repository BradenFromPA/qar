const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Express is running...');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});