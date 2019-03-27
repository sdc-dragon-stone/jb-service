const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.connect('mongodb://localhost/airbnbDesc', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

let descriptionSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  city: String,
  numGuests: Number,
  numBedrooms: Number,
  numBeds: Number,
  numBaths: Number,
  description: String
}, { _id: false }
);

descriptionSchema.plugin(AutoIncrement);

const Description = mongoose.model('Description', descriptionSchema);

Description.counterReset('_id');

const save = (descs) => {
  return new Promise((resolve, reject) => {
    descs.map((descObj) => {
      const home = new Description(descObj);
      home.save((err) => {
        if (err) {
          console.log('Error saving home description to database:', err);
        } else {
          console.log('Saved:', home.title);
          resolve(home);
        }
      });
    });
  });
};

const readOne = (idNum) => {
  return Description.find({ _id: idNum });
};

const readAll = () => {
  return Description.find().sort({ _id: 'ascending' });
};

module.exports = { save, readOne, readAll };