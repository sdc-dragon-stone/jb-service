const express = require('express');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');

const port = process.env.PORT || 3210;
const app = express();
const db = require('../database/index.js');
const createOne = require('../database/createOne.js');

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
  console.log('inside post')
  let oneItem = createOne.item();
  db.save({oneItem}, (err, result) => {
    if (err) { throw err; }
    console.log('saved', result);
  });
});

app.delete('/delete', (req, res) => {
  db.deleteOne({}, (err) => { // not sure what to pass into db.deleteOne
    if (err) { throw err; }
    console.log('item deleted!');
  });
});

app.put('/put', (req, res) => {
  db.findByIdAndUpdate(id, update, (err, result) => {
    if (err) { throw err; }
    console.log('updated', result);
  });
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
