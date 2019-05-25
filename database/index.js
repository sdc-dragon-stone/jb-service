const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/airbnbDesc';

mongoose.connect(mongoUri, { useNewUrlParser: true }, console.log('mongoose - connected! yo'));
mongoose.set('useCreateIndex', true);

const descriptionSchema = new mongoose.Schema({
  _id: Number,
  host: {
    name: String,
    pic: String
  },
  title: String,
  city: String,
  numGuests: Number,
  homeType: String,
  numBedrooms: Number,
  numBeds: Number,
  numBaths: Number,
  description: String
}, { _id: false });

descriptionSchema.plugin(AutoIncrement);

const Description = mongoose.model('Description', descriptionSchema);


const save = (descs) => {
  Description.counterReset('_id');
  return new Promise((resolve) => {
    descs.map((descObj) => {
      const home = new Description(descObj);
      home.save((err) => {
        if (err) {
          console.log('Error saving home description to database:', err);
        } else {
          console.log('Saved:', home);
          resolve(home);
        }
      });
    });
  });
};

const saveOne = (item, callback) => {
  const oneItem = new Description(item);
  oneItem.save((err) => {
    if (err) {
      console.log('Error save one item to database', err);
    } else {
      callback(null, console.log('Saved one item:', item));
    }
  });
};


const deleteOne = (item, callback) => {
  const deleteItem = new Description(item);
  deleteItem.deleteOne({ pic: new RegExp('/https://s3.amazonaws/') }, (deleteErr) => {
    if (deleteErr) { throw deleteErr; }
    callback(null, console.log('item deleted!'));
  });
};

const updateOne = (item, callback) => {
  const query = { numBeds: 2 };
  Description.findOneAndUpdate(query, { numBeds: '526' }, (err) => {
    if (err) { throw err; }
    callback(null, console.log('updateOne end'));
  });
};

const readOne = idNum => Description.find({ _id: idNum });

const readAll = () => Description.find().sort({ _id: 'ascending' });

module.exports = { save, readOne, readAll, saveOne, deleteOne, updateOne };
