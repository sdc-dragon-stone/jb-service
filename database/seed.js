const s = require('underscore.string');
const db = require('./index.js');

// ================== Function to return random numbers ================== \\
const rand = function rand(input) {
  let isArray = false;
  let hasArgs = false;
  let num;

  // if provided an array, return a random array element
  if (Array.isArray(input)) {
    isArray = true;
    num = input.length;
    // if provided two inputs, return a random number between the second number and the first
  } else if (arguments[1] !== undefined) {
    if (typeof input === 'number' && typeof arguments[1] === 'number') {
      hasArgs = true;
      const max = arguments[1];
      num = ((max + 1) - input);
    }
    // if provided a number, return a random number between 1 and the number
  } else if (typeof input === ('number')) {
    num = input;
    // if nothing provided, return a random number between 1 and 12
  } else {
    num = 12;
  }

  const number = Math.floor(Math.random() * num);

  if (isArray) {
    return input[number];
  } else if (hasArgs) {
    return number + input;
  } else {
    return number + 1;
  }
};
// =========================== End of rand() =========================== \\

// ======================== Description Building ======================== \\

const cities = ['Chicago', 'St. Louis', 'Kansas City', 'Minneapolis', 'Pittsburgh', 'Oklahoma City', 'Tuscon', 'Las Vegas', 'Phoenix',
  'Atlanta', 'Dallas', 'Nashville', 'Detroit', 'Philadelphia', 'New York', 'Cleveland', 'Portland', 'Tampa', 'Miami', 'Houston', 'Austin',
  'Albuquerque', 'Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Sacramento', 'Denver', 'Toronto', 'Seattle', 'Vancouver', 'Winnipeg',
  'Mexico City', 'Monterrey', 'Madrid', 'Paris', 'London', 'Berlin', 'Vienna', 'Rome', 'Istanbul', 'Mumbai', 'Moscow', 'Hong Kong', 'Tokyo',
  'Bangkok', 'Seoul', 'Jakarta', 'Honolulu', 'Anchorage'];

let city;

const genCity = () => {
  city = rand(cities);
  return city;
};

const adjectives = ['wonderful', 'beautiful', 'amazing', 'brilliant', 'cool', 'fabulous', 'marvelous', 'remarkable', 'groovy', 'unique',
  'exclusive', 'rare', 'chic', 'elegant', 'luxurious', 'modern', 'stylish', 'trendy', 'clean', 'sharp', 'dapper', 'classy', 'flashy',
  'upscale', 'polished', 'new', 'sleek', 'jazzy', 'cozy', 'vintage', 'rustic', 'charming', 'efficient', 'cute', 'liveable', 'private'];

const nouns = ['flat', 'house', 'condo', 'apartment', 'duplex', 'townhouse', 'loft', 'suite', 'studio'];

const genLandmark = (town) => {
  const landmarks = ['the library', 'Umbrella Pharmaceuticals', 'the movie theater', 'the Dairy Queen parking lot',
    'City Hall', 'the park', 'the train station', 'the aquarium', 'the planetarium', 'Taco Bell', 'a Porta Potty', 'a church', 'McDonald\'s',
    'the gym', 'the world\'s largest fire hydrant museum', 'the cemetary', 'Silent Hill Hospital', 'the beach', 'the mall',
    'the airport', 'the gas station', 'the giant pumpkin', 'the subway', 'the North Pole', `${town} Coffee`, 'Starbucks', `${town} Airport`,
    `${town} Science Center`, 'Walmart', 'PeeWee\'s Playhouse', 'the Courthouse', 'Chipotle', `Pier ${rand()}`, 'the post office', rand(cities),
    'Wendy\'s', 'the football stadium', 'the bank', 'one of the hottest neighborhoods', 'public transportation'];
  return rand(landmarks);
};

const attractions = ['grocery stores', 'coffee shops', 'schools', 'bars', 'restaurants', 'clubs', 'shops', 'parks', 'places of interest',
  'activities', 'pools', 'fishing spots', 'museums', 'dog parks', 'diners', 'cafes', 'book stores'];

const loc = [`situated between ${genLandmark(city)} and`, 'right next to', 'North of', 'South of', 'West of', 'East of', 'behind', 'in front of',
  'across the street from', 'diagonal from', 'near', 'close to', 'beside', 'minutes from', 'steps from', 'walking distance from', 'jogging distance from',
  'not far from', 'a bus ride from', 'a train ride from', 'a subway ride from', 'hours from the nearest', 'a ferry ride away from', `at the intersection of ${genLandmark(city)} and`];

const features = ['hardwood floors', 'an en suite', 'marble floors', 'additional closets', 'plenty of space', 'its own entrance', 'a kitchenette',
  'modern furnishings', 'bright rooms', 'a pool', 'a hot tub', 'a fireplace', 'vintage furnishings', 'instagram-worthy decor', 'amazing views', 'a chef\'s kitchen',
  'free parking', 'stunning views', 'postcard views', 'art-filled rooms', 'exquisite furnishings', 'a pristine pergola', 'a dining area in the backyard',
  'a custom outdoor fireplace', 'Carrara marble tops', 'refined touches', 'an open floor plan', 'vaulted ceilings', 'two private decks'];

const provided = ['a refrigerator', 'a sink', 'a microwave', 'an electric kettle', 'a French press coffee maker', 'coffee', 'tea', 'glasses', 'mugs', 'plates',
  'bowls', 'silverware', 'a can opener', 'a bottle opener', 'granola', 'oatmeal', 'light snacks', 'shampoo', 'conditioner', 'bodywash', 'a comfy bed',
  'a smart TV', 'Wifi', 'essentials', 'extra pillows', 'extra blankets', 'hangers', 'an iron', 'a hairdryer', 'soap', 'bottled water'];

const verbs = ['features', 'includes', 'comes with', 'showcases', 'emphasizes', 'headlines', 'promotes', 'spotlights', 'stars', 'advertises', 'highlights'];

let noun;

const genNoun = () => {
  noun = rand(nouns);
  return noun;
};

const genTitle = type => s(`${rand(adjectives)} ${type} with ${rand(features)}`).capitalize().value();

const genNumGuests = () => rand();

let numBedrooms;

const genNumBedrooms = (type) => {
  numBedrooms = ['suite', 'studio', 'room'].indexOf(type) !== -1 ? 1 : rand();
  return numBedrooms;
};

const genNumBeds = numGuests => rand(numGuests, (numGuests / 2));

const genNumBaths = () => rand();


const genDescription = (type, numRooms) => {
  // All possible sentences in one array
  const sentences = [`${rand(adjectives)} and ${rand(adjectives)} ${type} in the heart of ${city}!`, `${rand(adjectives)} ${type} with ${numRooms} ${numRooms > 1 ? 'bedrooms' : 'bedroom'}.`,
    `${rand(loc)} ${genLandmark(city)}, the ${type} is ${rand(loc)} ${genLandmark(city)}.`, `${city} is a ${rand(adjectives)} area with plenty of ${rand(attractions)} and ${rand(attractions)}.`,
    `The ${type} ${rand(verbs)} ${rand(features)}, ${rand(features)}, and ${rand(features)}.`, `We provide ${rand(provided)}, ${rand(provided)} and ${rand(provided)}.`,
    `There will be ${rand(provided)} and ${rand(provided)} accessible to guests.`];

  const numSentences = rand(sentences.length, 6);
  const description = [];

  // Add sentences to description in random order
  for (let i = 0; i < numSentences; i++) {
    const sentence = s(sentences[rand(numSentences)]).capitalize().value();
    if (!description.includes(sentence)) {
      description.push(sentence);
    }
  }

  return description.join(' ');
};


// ====================== End of Description Building ====================== \\


const descriptions = [];

for (let i = 0; i < 100; i++) {
  genNoun();
  const numGuests = genNumGuests();
  descriptions.push({
    title: genTitle(noun),
    city: genCity(),
    numGuests,
    numBedrooms: genNumBedrooms(noun),
    numBeds: genNumBeds(numGuests),
    numBaths: genNumBaths(),
    description: genDescription(noun, numBedrooms)
  });
}

db.save(descriptions);
