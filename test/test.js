const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const app = require('../server');
const generate = require('../helpers/generator.js');

// =============== Test Database =============== \\

mongoose.connect('mongodb://localhost/airbnbTest', { useNewUrlParser: true });

const testSchema = new mongoose.Schema({
  title: String,
  city: String,
  numGuests: Number,
  numBedrooms: Number,
  numBeds: Number,
  numBaths: Number,
  description: String
});

const TestDesc = mongoose.model('TestDesc', testSchema);

const noun = generate.genNoun();
const numGuests = generate.genNumGuests();
const numBedrooms = generate.genNumBedrooms();

const testHome = new TestDesc({
  title: generate.genTitle(noun),
  city: generate.genCity(),
  numGuests,
  numBedrooms,
  numBeds: generate.genNumBeds(numGuests),
  numBaths: generate.genNumBaths(),
  description: generate.genDescription(noun, numBedrooms)
});

// =============== End Database =============== \\

chai.use(chaiHttp);
chai.should();

const randNum = () => Math.floor(Math.random() * Math.floor(100));

describe('Server', () => {
  it('should return status 200 from GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should not return 404 status from GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.not.have.status(404);
        done();
      });
  });

  it('should return status 404 from nonexistent paths', (done) => {
    chai.request(app)
      .get('/descriptions')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('Database', () => {
  before(() => {
    testHome.save((err) => {
      if (err) {
        console.log('Error saving home description to test database:', err);
      } else {
        console.log('Saved test home:', testHome.title);
      }
    });
  });

  it('should return a description object', () => {
    TestDesc.find({}, (err, res) => {
      if (err) console.log('Error reading from db:', err);
      else {
        res[0].should.be.an('object');
      }
    });
  });

  describe('Description Object', () => {
    it('should have a title', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading title:', err);
        else {
          console.log('res is:', res);
          console.log('res[0] is:', res[0]);
          res[0].title.should.exist;
          res[0].title.should.be.a('string');
        }
      });
    });

    it('should have a city', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading city:', err);
        else {
          res[0].city.should.exist;
          res[0].city.should.be.a('string');
        }
      });
    });

    it('should have a number of allowed guests', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading number of guests:', err);
        else {
          res[0].numGuests.should.exist;
          res[0].numGuests.should.be.a('number');
        }
      });
    });

    it('should have a number of bedrooms', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading bedrooms:', err);
        else {
          res[0].numBedrooms.should.exist;
          res[0].numBedrooms.should.be.a('number');
        }
      });
    });

    it('should have a number of beds', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading beds:', err);
        else {
          res[0].numBeds.should.exist;
          res[0].numBeds.should.be.a('number');
        }
      });
    });

    it('should have a number of bathrooms', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading bathrooms:', err);
        else {
          res[0].numBaths.should.exist;
          res[0].numBaths.should.be.a('number');
        }
      });
    });

    it('should have a description paragraph', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading paragraph:', err);
        else {
          res[0].description.should.exist;
          res[0].description.should.be.a('string');
        }
      });
    });
  });
});
