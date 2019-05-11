const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/airbnbDesc';

mongoose.connect(mongoUri, { useNewUrlParser: true });
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

const saveOne = (item) => {
  const oneItem = new Description(item);
  oneItem.save((err) => {
    if (err) {
      console.log('Error save one item to database', err);
    } else {
      console.log('Saved one item', item.title);
      // resolve(oneItem);
    }
  });
};

const deleteOne = (item) => {
  db.findOneAndDelete({ "pic" : { $regex: /https://s3.amazonaws/, $options: 'i' } }, (err) => {
  if (err) { throw err; }s: 'i'
  console.log('item deleted!');
  res.send('deleted');
});
}


const readOne = idNum => Description.find({ _id: idNum });

const readAll = () => Description.find().sort({ _id: 'ascending' });

module.exports = { save, readOne, readAll, saveOne, deleteOne };
