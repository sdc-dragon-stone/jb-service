const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect('mongodb://localhost/airbnbDesc', { useNewUrlParser: true });
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
          console.log('Saved:', home.title);
          resolve(home);
        }
      });
    });
  });
};

const readOne = idNum => Description.find({ _id: idNum });

const readAll = () => Description.find().sort({ _id: 'ascending' });

module.exports = { save, readOne, readAll };
