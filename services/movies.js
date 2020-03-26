//const { moviesMocks } = require('../utils/mocks/movies')

const MongoLib = require('../lib/mongo')

class MoviesService
{
    constructor(){
        this.collection = 'movies'
        this.mongoDB = new MongoLib()
    }

    async getMovies({ tags }){
        const query = tags && { tags: { $in: tags }}
        const movies = await this.mongoDB.getAll(this.collection, query)
        return movies || []
    }

    async getMovie({ movieId }){
        const movies = await this.mongoDB.get(this.collection, movieId)
        return movies || {}
    }

    async createMovie({ movie }){
        const createdmovieId = await this.mongoDB.create(this.collection, movie)
        return createdmovieId
    }

    async updateMovie({ movieId, movie} = {}){
        const updateMovieId = await this.mongoDB.update(this.collection, movieId, movie)
        return updateMovieId
    }

    async deleteMovie({ movieId }){
        const deleteMovieId = await this.mongoDB.delete(this.collection, movieId)
        return deleteMovieId
    }
}

module.exports = MoviesService