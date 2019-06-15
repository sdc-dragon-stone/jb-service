const faker = require('faker');
const generator = require('../helpers/generator.js');

const item = () => {
  const oneItem = [];
  for (let i = 0; i < 1; i++) {
    const noun = generator.genNoun();
    const numBedrooms = generator.genNumBedrooms(noun);
    const numGuests = generator.genNumGuests();
    oneItem.push({
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
  // console.log('oneItem', oneItem);
  return oneItem;
};

module.exports = { item };
