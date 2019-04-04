const s = require('underscore.string');

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

const nouns = ['house', 'condo', 'apartment', 'duplex', 'townhouse', 'loft', 'suite', 'studio', 'cottage', 'cabin'];

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
  'activities', 'pools', 'fishing spots', 'museums', 'dog parks', 'diners', 'cafes', 'book stores', 'art galleries', 'services', 'bakeries'];

const loc = [`situated between ${genLandmark(city)} and`, 'right next to', 'North of', 'South of', 'West of', 'East of', 'behind', 'in front of',
  'across the street from', 'diagonal from', 'near', 'close to', 'beside', 'minutes from', 'steps from', 'walking distance from', 'jogging distance from',
  'not far from', 'a bus ride from', 'a train ride from', 'a subway ride from', 'hours from the nearest', 'a ferry ride away from',
  `at the intersection of ${genLandmark(city)} and`, 'a block from'];

const features = ['hardwood floors', 'an en suite', 'marble floors', 'additional closets', 'plenty of space', 'its own entrance', 'a kitchenette',
  'modern furnishings', 'bright rooms', 'a pool', 'a hot tub', 'a fireplace', 'vintage furnishings', 'instagram-worthy decor', 'amazing views', 'a chef\'s kitchen',
  'free parking', 'stunning views', 'postcard views', 'art-filled rooms', 'exquisite furnishings', 'a pristine pergola', 'a dining area in the backyard',
  'a custom outdoor fireplace', 'Carrara marble tops', 'refined touches', 'an open floor plan', 'vaulted ceilings', 'two private decks', 'stone floors',
  'artistic decor', 'privacy', 'backyard garden', 'a balcony', 'self check-in', 'keyless entry', 'a new bathroom', 'a new kitchen', 'new wallpaper',
  'new popcorn ceilings', 'new carpeting', 'a fully carpeted bathroom', 'a luxury bathroom', 'a comfy bed', 'a king sized bed', 'a queen sized bed',
  'a full sized bed', 'a twin sized bed', 'a mattress on the floor', 'a blow up mattress'];

const provided = ['a refrigerator', 'a sink', 'a microwave', 'an electric kettle', 'a French press coffee maker', 'coffee', 'tea', 'glasses', 'mugs', 'plates',
  'bowls', 'silverware', 'a can opener', 'a bottle opener', 'granola', 'oatmeal', 'light snacks', 'shampoo', 'conditioner', 'bodywash', 'a comfy bed',
  'a smart TV', 'Wifi', 'essentials', 'extra pillows', 'extra blankets', 'hangers', 'an iron', 'a hairdryer', 'soap', 'bottled water', 'an iPad', 'an iPod',
  'breakfast items', 'maps', 'a map of the area', 'guidebooks', 'a book to read', 'books', 'magazines', 'a magazine', 'wine', 'a bottle of wine', 'an array of paperbacks',
  'a multitude of hardcovers', 'k-cup coffee maker', 'patio chairs', 'a heat lamp', 'filtered water', 'a DVD player', 'a Blu-ray player', 'a record player', 'a cassette player',
  'a VCR', 'a CD player', 'a walkman', 'an extra mattress', 'a sofa-bed', 'a fold down sofa', 'a futon', 'a stove', 'an oven', 'a toaster', 'a crockpot', 'a space heater',
  'a fan', 'sugar', 'cream', 'hot water', 'toilet paper', 'paper towels', 'bed sheets', 'oil', 'salt', 'pepper', 'a fire extinguisher', 'a smoke detector', 'a first aid kit',
  'air conditioning', 'a washer', 'a dryer', 'a piece of gum', 'pocket lint', 'a seashell', 'a picture of our dog'];

const verbs = ['features', 'includes', 'comes with', 'showcases', 'emphasizes', 'spotlights', 'stars', 'highlights'];

const floor = ['ground', 'basement', 'underground', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

const areas = ['sleeping', 'eating', 'bathing', 'dancing', 'relaxing', 'dining', 'cooking', 'working', 'singing', 'drinking', 'playing', 'running', 'walking', 'talking',
  'reading', 'thinking', 'hanging out'];

const electricity = ['solar panels on the roof', 'potatoes', 'magnets', 'the river', 'magic elves in the basement', 'the power lines', 'windmills', 'lightning'];

const transportation = ['an Uber', 'frequent buses', 'a taxi', 'a Lyft', 'frequent trains', 'a ferry', 'a canoe', 'an airplane ride', 'a mule ride'];

let noun;

const genNoun = () => {
  noun = rand(nouns);
  return noun;
};

const genHomeType = (type) => {
  const types = [`entire ${type}`, `private room in ${type}`, 'shared room'];
  return rand(types);
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
    `There will be ${rand(provided)} and ${rand(provided)} accessible to guests.`, `Parking is ${rand(2) > 1 ? 'challenging in this neighborhood' : 'easy in the neighborhood'}.`,
    `The ${type} is located on the ${rand(floor)} floor.`, `There are areas for ${rand(areas)}, ${rand(areas)}, ${rand(areas)}, and ${rand(areas)}.`,
    `Street parking is ${rand(2) > 1 ? 'safe' : 'not advised in our neighborhood. Make sure to lock your car'}.`, `Our electricity comes from ${rand(electricity)}.`,
    `Transportation to Downtown (about ${rand() + 1} miles to ${city} Center) or any of the ${city} attractions is easy with ${rand(transportation)}!`, `${rand(provided)} available upon request.`,
    `The ${type} is ${rand() * 123} sq ft and has ${numRooms > 4 ? (numRooms > 8 ? 10 : 9) : 8} ft ceilings.`, `The ${numRooms} ${numRooms > 1 ? 'bedrooms have' : 'bedroom has'} ${rand(provided)}.`];

  // Add sentences to description in random order
  const shuffle = (array) => {
    let currIndex = array.length;
    let temp;
    let randIndex;

    // eslint-disable-next-line yoda
    while (0 !== currIndex) {
      randIndex = Math.floor(Math.random() * currIndex);
      currIndex--;

      temp = array[currIndex];
      array[currIndex] = array[randIndex];
      array[randIndex] = temp;
    }
    return array;
  };

  const description = shuffle(sentences.map(sentence => s(sentence).capitalize().value()));

  return description.join(' ');
};


// ====================== End of Description Building ====================== \\

module.exports = {
  genNoun,
  genNumGuests,
  genHomeType,
  genTitle,
  genCity,
  genNumBedrooms,
  genNumBeds,
  genNumBaths,
  genDescription
};
