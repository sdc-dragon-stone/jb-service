const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

describe('Server', () => {
  it('should return status 200 from GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});