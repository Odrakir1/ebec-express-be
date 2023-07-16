require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.SERVER_PORT || 80;



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})