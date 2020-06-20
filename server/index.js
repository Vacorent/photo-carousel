const path = require('path');
const express = require('express');
const app = express();
const port = 3001;
const db = require('../database');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/carousel', (req, res) => {

  db.query('select * from places', (err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.send(data);
    }
  })

});


app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));