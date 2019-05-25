const faker = require('faker');
const generator = require('../helpers/generator.js');
const db = require('./index.js');

const descriptions = [];

for (let i = 0; i < 10; i++) {
  const noun = generator.genNoun();
  const numBedrooms = generator.genNumBedrooms(noun);
  const numGuests = generator.genNumGuests();
  descriptions.push({
    host: {
      name: faker.name.firstName(),
      pic: faker.image.avatar()
    },
    title: generator.genTitle(noun),
    city: generator.genCity(),
    numGuests,
    homeType: generator.genHomeType(noun),
    numBedrooms,
    numBeds: generator.genNumBeds(numGuests),
    numBaths: generator.genNumBaths(),
    description: generator.genDescription(noun, numBedrooms)
  });
}

db.save(descriptions);
