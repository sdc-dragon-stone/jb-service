const faker = require('faker');
const generator = require('../helpers/generator.js');
const db = require('./index.js');

const generateData = () => {
  return new Promise((resolve) => {
    const descriptions = [];
    for (let i = 0; i < 10000; i++) {
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
    console.log('one: return descriptions');
    resolve(descriptions);
  });
};

const insert = (houses) => {
  return new Promise((resolve) => {
    db.Description.create(houses, (error) => {
      if (error) { throw error; }
      console.log('two: inserted many houses!');
      resolve();
    });
  });
};

const seed = (items) => {
  const batch = async () => {
    for (let i = 0; i < items; i++) {
      console.log('#', i);
      const houses = await generateData();
      await insert(houses);
      console.log('three: end of seed');
    }
    console.log('seeding complete');
  };
  db.Description.counterReset('_id', (err) => {
    if (err) { throw err; }
    batch();
  });
};

seed(1000);
