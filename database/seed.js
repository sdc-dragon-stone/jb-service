const generator = require('../helpers/generator.js');
const db = require('./index.js');

const descriptions = [];

for (let i = 0; i < 100; i++) {
// const numGuests = generator.genNumGuests();

  const noun = generator.genNoun();
  const numBedrooms = generator.genNumBedrooms();
  const numGuests = generator.genNumGuests();
  descriptions.push({
    title: generator.genTitle(noun),
    city: generator.genCity(),
    numGuests,
    numBedrooms: generator.genNumBedrooms(noun),
    numBeds: generator.genNumBeds(numGuests),
    numBaths: generator.genNumBaths(),
    description: generator.genDescription(noun, numBedrooms)
  });
}

db.save(descriptions);
