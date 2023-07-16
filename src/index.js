require('dotenv').config();

const express = require('express');
const app = express();

const requestUtil = require("./utils/index.js");

const PORT = process.env.SERVER_PORT || 80;



app.get('/', (req, res) => {
  res.send('Hello World!');

  requestUtil.get("https://jsonplaceholder.typicode.com/users", console.log);
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})