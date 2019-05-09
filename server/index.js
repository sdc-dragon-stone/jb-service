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
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
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

app.post('/post', (req, res) => {

});

app.delete('/delete', (req, res) => {
  db.deleteOne({}, (err) => {
    if (err) { throw err; }
    console.log('item deleted!');
  });
});

app.put('/put', (req, res) => {
  db.findByIdAndUpdate(id, update, options, callback)
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
