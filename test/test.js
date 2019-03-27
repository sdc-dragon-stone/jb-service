const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

const randNum = () => {
  return Math.floor(Math.random() * Math.floor(100));
};

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
  it('should return status 200 from GET /description', (done) => {
    chai.request(app)
      .get('/description')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should return a description object', (done) => {
    chai.request(app)
      .get('/description')
      .query({ _id: randNum() })
      .end((err, res) => {
        res.body[0].should.be.an('object');
        done();
      });
  });

  describe('Description Object', () => {
    it('should have a numeric id', (done) => {
      chai.request(app)
        .get('/description')
        .query({ _id: randNum() })
        .end((err, res) => {
          res.body[0]._id.should.be.a('number');
          done();
        });
    });

    it('should have a title', (done) => {
      chai.request(app)
        .get('/description')
        .query({ _id: randNum() })
        .end((err, res) => {
          res.body[0].title.should.exist;
          res.body[0].title.should.be.a('string');
          done();
        });
    });

    it('should have a city', (done) => {
      chai.request(app)
        .get('/description')
        .query({ _id: randNum() })
        .end((err, res) => {
          res.body[0].city.should.exist;
          res.body[0].city.should.be.a('string');
          done();
        });
    });

    it('should have a number of allowed guests', (done) => {
      chai.request(app)
        .get('/description')
        .query({ _id: randNum() })
        .end((err, res) => {
          res.body[0].numGuests.should.exist;
          res.body[0].numGuests.should.be.a('number');
          done();
        });
    });

    it('should have a number of bedrooms', (done) => {
      chai.request(app)
        .get('/description')
        .query({ _id: randNum() })
        .end((err, res) => {
          res.body[0].numBedrooms.should.exist;
          res.body[0].numBedrooms.should.be.a('number');
          done();
        });
    });

    it('should have a number of beds', (done) => {
      chai.request(app)
        .get('/description')
        .query({ _id: randNum() })
        .end((err, res) => {
          res.body[0].numBeds.should.exist;
          res.body[0].numBeds.should.be.a('number');
          done();
        });
    });

    it('should have a number of bathrooms', (done) => {
      chai.request(app)
        .get('/description')
        .query({ _id: randNum() })
        .end((err, res) => {
          res.body[0].numBaths.should.exist;
          res.body[0].numBaths.should.be.a('number');
          done();
        });
    });

    it('should have a description paragraph', (done) => {
      chai.request(app)
        .get('/description')
        .query({ _id: randNum() })
        .end((err, res) => {
          res.body[0].description.should.exist;
          res.body[0].description.should.be.a('string');
          done();
        });
    });
  });
});