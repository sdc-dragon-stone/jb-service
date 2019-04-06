# Project Name

> Airbnb

## Related Projects

  - https://github.com/mash-fec/a-service
  - https://github.com/mash-fec/j-service
  - https://github.com/mash-fec/m-service
  - https://github.com/mash-fec/v-service

## Table of Contents

1. [Usage](#Usage)
2. [Testing] (#Testing)
3. [Requirements](#Requirements)
4. [Development](#Development)
5. [Dependencies] (#Installing Depencencies)
6. [API] (#API Requests)

## Usage

Install dependencies by running 'npm install'
Install MongoDB using 'brew install mongodb-community@4.0'
Connect a mongo shell to the running instance by running 'mongo'
Run 'npm start' to start the server
Run 'npm run build' to start webpack and create bundle.js
Run 'npm run seed' to seed data into the MongoDB database
Open 'http://localhost:3210/' to load 'index.html'

## Testing

To run tests, first close server connection with 'CTRL + C'
Run 'npm test-backend'
Run 'npm test-frontend'

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### API Requests

GET: '/description'

RESULT: {
  _id : 37,
  title : "Cozy townhouse with a chef's kitchen",
  city : "Seoul",
  numGuests : 5,
  numBedrooms : 6,
  numBeds : 4,
  numBaths : 12,
  description : "There will be a hairdryer and tea accessible to guests.  A bus ride from the train station,
  the townhouse is in front of the library. Seoul is a classy area with plenty of bars and clubs. The townhouse stars modern furnishings,
  refined touches,
  and stunning views. We provide shampoo,
  a comfy bed and extra blankets.",
  __v : 0
 }