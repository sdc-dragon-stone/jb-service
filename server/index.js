const express = require('express');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');

const port = process.env.PORT || 3210;
const app = express();
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', expressStaticGzip(`${__dirname}/../public`, {
  index: false,
  enableBrotli: false,
  orderPreference: ['gz'],
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
}));

app.use(express.static('./public'));

app.get('/description', (req, res) => {
  db.readOne(req.query._id).exec((err, homeDesc) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(homeDesc[0]);
    }
  });
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
