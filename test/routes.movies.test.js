const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMocks, MovieServiceMock } = require('../utils/mocks/movies.js');

const testServer = require('../utils/testServer');

describe('routes - movies', function () {
  // Cada vez que llamemos al servicio sera reemplazado por el STUB MoviesServiceMock , lo que hace es crear un Stub
  const route = proxyquire('../routes/movies', {'../services/movies': MovieServiceMock });

  const request = testServer(route)

  describe('GET /movies', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/movies').expect(200, done)
    })

    it('should respond with the list of movies', function (done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMocks,
          message: 'movies listed',
        })
        done()
      })
    })
  })
})