const assert = require('assert') // NATIVA DE NODEJS

const proxyquire = require('proxyquire')

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib')

const { moviesMocks } = require('../utils/mocks/movies')


describe("services - movies", function(){

    const MoviesServices = proxyquire('../services/movies', { '../lib/mongo' : MongoLibMock})

    const moviesServices = new MoviesServices()

    describe("when getMovies method is calle", async function(){
      
        it('should call the getall MongoLib methos', async function(){
            await moviesServices.getMovies({})
            assert.strictEqual(getAllStub.called, true)
        })

        it("should return an array of movies", async function(){
            const result = await moviesServices.getMovies({})
            const expected = moviesMocks;

            assert.deepEqual(result, expected)
        })
    })
})