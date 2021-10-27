const {Router} = require('express')
const movieAndSerie = Router()
const auth = require('../helpers/auth')
// const { getAllMoviesandSeries ,getAllMovies, getMovie, getAllSeries, getSerie, getAllEpisodes, getEpisode} = require('../controllers/MovieAndSerie.controllers')
const { getAllMoviesandSeries ,getAllMovies,getAllSeries,getMovieById,getSerieById,getMovieByName} = require('../controllers/MovieAndSerie.controllers')

// find all movies and series
movieAndSerie.get('/findAll/', auth.isAuthenticated,getAllMoviesandSeries)
// find all movies
movieAndSerie.get('/findAllMovies/', auth.isAuthenticated, getAllMovies)
// find all series
movieAndSerie.get('/findAllSeries/', auth.isAuthenticated, getAllSeries)
// find movie by id
movieAndSerie.get('/findMovieId/:id', auth.isAuthenticated, getMovieById)
// find serie by id
movieAndSerie.get('/findSerieId/:id', auth.isAuthenticated, getSerieById)
// find movie by name
movieAndSerie.get('/findMovieName/:name', auth.isAuthenticated, getMovieByName)




module.exports = movieAndSerie