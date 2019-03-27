const db = require('./index.js');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerparagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 6
  }
});

const title = new LoremIpsum({
  wordsPerSentence: {
    max: 7,
    min: 2
  }
});

const randNum = () => {
  return Math.floor(Math.random() * Math.floor(8));
};

const descriptions = [];

for (let i = 0; i < 100; i++) {
  descriptions.push({
    title: title.generateSentences(1),
    city: lorem.generateWords(1),
    numGuests: randNum(),
    numBedrooms: randNum(),
    numBeds: randNum(),
    numBaths: randNum(),
    description: lorem.generateParagraphs(1)
  });
}

db.save(descriptions);
// .then(() => {
//   db.readAll()
//     .then((res) => {
//       console.log('result:', res);
//     });
// });