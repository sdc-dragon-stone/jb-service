const express = require('express');
const bodyParser = require('body-parser');
// const expressStaticGzip = require('express-static-gzip');

const port = process.env.PORT || 3210;
const app = express();
const db = require('../database/index.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
tools to compress bundle.js file
app.use('/', expressStaticGzip(`${__dirname}/../public`, {
  index: false,
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
}));
*/


app.use(express.static('./public'));

app.get('/description', (req, res) => {
  console.log('_id', req.query._id);
  db.readOne(req.query._id).exec((err, homeDesc) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(homeDesc[0]);
    }
  });
});

app.post('/post', (req, res) => {
  const post = req.body.postItem[0];
  // req.setTimeout(0);
  db.saveOne(post, (err) => {
    if (err) { throw err; }
    res.status(200);
  });
});

app.delete('/delete', (req, res) => {
  req.body.deleteItem[0]._id = 1;
  const deleteItem = req.body.deleteItem[0];
  db.deleteOne(deleteItem, (errDelete) => {
    if (errDelete) { throw errDelete; }
    res.status(200);
  });
});

app.put('/put', (req, res) => {
  console.log('inside put');
  db.findByIdAndUpdate(id, update, (err, result) => {
    if (err) { throw err; }
    console.log('updated', result);
    res.send('item updated!');
  });
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
