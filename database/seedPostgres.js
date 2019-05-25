const faker = require('faker');
const fs = require('fs');
const pgp = require('pg-promise')({
  capSQL: true,
});
const generator = require('../helpers/generator.js');
const connectionString = require('./postgres.js');

const db = pgp(connectionString);

const descriptions = [];

// build the arr of objects
for (let i = 0; i < 10000; i++) {
  const noun = generator.genNoun();
  const numbedrooms = generator.genNumBedrooms(noun);
  const numguests = generator.genNumGuests();
  descriptions.push({
    // commenting out the 'host' object
    // host: {
    // },
    title: generator.genTitle(noun),
    city: generator.genCity(),
    numguests,
    hometype: generator.genHomeType(noun),
    numbedrooms,
    numbeds: generator.genNumBeds(numguests),
    numbaths: generator.genNumBaths(),
    description: generator.genDescription(noun, numbedrooms),
    name: faker.name.firstName(),
    pic: faker.image.avatar()
  });

}

console.log('descriptions[0]', descriptions[0]);

const cs = new pgp.helpers.ColumnSet([
  'title',
  'city',
  'numguests',
  'hometype',
  'numbedrooms',
  'numbeds',
  'numbaths',
  'description',
  'name',
  'pic'
],
{ table: 'descriptions' });


// Generating 10,000 records 1000 times, for the total of 10 million records:
function getNextData(t, pageIndex) {
  let data = null;
  console.log('page index', pageIndex);
  if (pageIndex < 1000) {
    data = [];
    for (let i = 0; i < 10000; i++) {
      data[i] = descriptions[i];
    }
  }
  return Promise.resolve(data);
}

db.tx('massive-insert', t => {
  return t.sequence(index => {
    return getNextData(t, index)
      .then(data => {
        if (data) {
          console.log('data', data[0]);
          const insert = pgp.helpers.insert(data, cs);
          return t.none(insert);
        }
      });
  });
})
  .then(data => {
      // COMMIT has been executed
      const minutes = data.duration / 60000;
      console.log('Total batches:', data.total, ', Duration:', minutes.toFixed(2));
  })
  .catch(error => {
      // ROLLBACK has been executed
      console.log(error);
  });