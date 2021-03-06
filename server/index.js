const express = require('express');
const bodyParser = require('body-parser');
// const expressStaticGzip = require('express-static-gzip');

const port = process.env.PORT || 3210;
const app = express();
const db = require('../database/index.js');
const postgresDb = require('../database/postgres.js')


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
app.use('/delete/:deleteId', express.static('./public'));

app.get('/description', (req, res) => {
  console.log('_id', req.query._id);
  db.readOne(req.query._id).exec((err, homeDesc) => {
    if (err) {
      res.status(404).send(err);
    } else {
      console.log('homeDesc', homeDesc);
      res.status(200).send(homeDesc[0]);
    }
  });
});

app.post('/post', (req, res) => {
  console.log('inside post!')
  const post = req.body.postItem[0];
  db.saveOne(post, (err) => {
    if (err) { throw err; }
    res.status(200);
  });
});

app.delete('/delete/:deleteId', (req, res) => {
  const deleteItem = req.body.deleteItem[0];
  db.deleteOne(deleteItem, (errDelete) => {
    if (errDelete) { throw errDelete; }
    res.status(200);
  });
});

app.put('/put', (req, res) => {
  req.body.updateItem[0]._id = 1;
  const updateItem = req.body.updateItem[0];
  console.log('inside put');
  db.updateOne(updateItem, (err) => {
    if (err) { throw err; }
    res.status(200).send('item updated!');
  });
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
