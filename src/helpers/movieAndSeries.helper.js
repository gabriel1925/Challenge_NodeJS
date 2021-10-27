const movieAndSeriesHelper = {}
const movie = require('../models/movie.models')
const serie = require('../models/serie.models')
movieAndSeriesHelper.getAllMoviesandSeries = async () => {
    try {
        const movies = await movie.find()
        .then(movies => {
            if(movies.length > 0) {

                return movies
            } else {
                return [{error: 'No movies found'}]
            }
        })
        .catch(err => {
            return [{error: 'Error finding movies'}]
        })
        const series = await serie.find()
        .then(series => {
            if(series.length > 0) {
                return series
            } else {
                return [{error: 'No series found'}]
            }
        })
        .catch(err => {
            return [{error: 'Error finding series'}]
        })
        let joined = [...movies, ...series]
        return joined
    } catch (error) {
        throw error
    }
}
movieAndSeriesHelper.getAllMovies = async () => {
    try {
        const movies = await movie.find()
        .then(movies => {
            if(movies.length > 0) {
                return movies
            } else {
                return {error: 'No movies found'}
            }
        })
        .catch(err => {
            return {error: 'Error finding movies'}
        })
        return movies
    } catch (error) {
        throw error
    }
}
movieAndSeriesHelper.getAllSeries = async () => {
    try {
        const series = await serie.find()
        .then(series => {
            if(series.length > 0) {
                return series
            } else {
                return {error: 'No series found'}
            }
        })
        .catch(err => {
            return {error: 'Error finding series'}
        })
        return series
    } catch (error) {
        throw error
    }
}
movieAndSeriesHelper.getMovie = async (id) => {
    try {
        const movie = await movie.findById({'_id': id})
        .then(movie => {
            if(movie) {
                return movie
            } else {
                return {error: 'No movie found'}
            }
        })
        .catch(err => {
            return {error: 'Error finding movie'}
        })
        return movie
    } catch (error) {
        throw error
    }
}
movieAndSeriesHelper.getSerie = async (id) => {
    try {
        const serie = await serie.findById({ '_id': id })
        .then(serie => {
            if(serie) {
                return serie
            } else {
                return {error: 'No serie found'}
            }
        })
        .catch(err => {
            return {error: 'Error finding serie'}
        })
        return serie
    } catch (error) {
        throw error
    }
}




module.exports = movieAndSeriesHelper