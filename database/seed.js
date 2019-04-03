const generator = require('../helpers/generator.js');
const db = require('./index.js');

const descriptions = [];

for (let i = 0; i < 100; i++) {
  const noun = generator.genNoun();
  const numBedrooms = generator.genNumBedrooms(noun);
  const numGuests = generator.genNumGuests();
  descriptions.push({
    title: generator.genTitle(noun),
    city: generator.genCity(),
    numGuests,
    numBedrooms,
    numBeds: generator.genNumBeds(numGuests),
    numBaths: generator.genNumBaths(),
    description: generator.genDescription(noun, numBedrooms)
  });
}

db.save(descriptions);
