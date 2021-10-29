const {Router} = require('express')
const movieAndSerie = Router()
const auth = require('../helpers/auth')
const { getAllMoviesandSeries ,getAllMovies,getAllSeries,getMovieById, getSerieById,getMovieByName, setDirector,setActor,setMovie,setSerie,getAllDirectors,getAllActors, getSerieByName,getSerieSeasonEpisode} = require('../controllers/MovieAndSerie.controllers')
// gettings all
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
movieAndSerie.get('/findMovieName', auth.isAuthenticated, getMovieByName)
// find serie by name
movieAndSerie.get('/findSerieName', auth.isAuthenticated, getSerieByName)
// find serie by Season and episode
movieAndSerie.get('/findSerieSeasonEpisode', auth.isAuthenticated, getSerieSeasonEpisode)
// get all directors
movieAndSerie.get('/getAllDirectors', auth.isAuthenticated, getAllDirectors)
// get all actors
movieAndSerie.get('/getAllActors', auth.isAuthenticated, getAllActors)

// set director
movieAndSerie.post('/setDirector', auth.isAuthenticated, setDirector)
// set actor
movieAndSerie.post('/setActor', auth.isAuthenticated, setActor)
// set movie
movieAndSerie.post('/setMovie', auth.isAuthenticated, setMovie)
// set serie
movieAndSerie.post('/setSerie', auth.isAuthenticated, setSerie)




module.exports = movieAndSerie