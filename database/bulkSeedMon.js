const faker = require('faker');
const mongoose = require('mongoose');
const generator = require('../helpers/generator.js');
const db = require('./index.js');

const generateData = () => {
  return new Promise((resolve) => {
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
    console.log('one: return descriptions');
    resolve(descriptions);
  });
};

const insert = (houses) => {
  return new Promise((resolve) => {
    db.Description.insertMany(houses, (error) => {
      if (error) { throw error; }
      console.log('two: inserted many houses!');
      resolve();
    });
  });
};

const seed = async (items) => {
  for (let i = 0; i < items; i++) {
    const houses = await generateData();
    await insert(houses);
    console.log('three: end of seed');
  }
};

seed(5);
