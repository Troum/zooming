const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, '../')));

app.get('/', (req, res) => {
  return res;
});

app.listen(5000);
