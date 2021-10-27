const movieAndSerie ={}
const movieAndSeriesHelpers = require('../helpers/movieAndSeries.helper')
// create getAllMoviesandSeries
movieAndSerie.getAllMoviesandSeries = async (req, res) => {
    // console.log(req.token)
    let token = req.token
        const moviesAndSeries =  await movieAndSeriesHelpers.getAllMoviesandSeries()
        .then(moviesAndSeries => {
            // moviesAndSeries.concat([req.token])
            console.log(moviesAndSeries)
            res.status(200).json({moviesAndSeries,token})
        })
        .catch(err => {
            res.status(500).json({err,token})
        })
}
// create getAllMovies
movieAndSerie.getAllMovies = async (req, res) => {
    let token = req.token
    const movies =  await movieAndSeriesHelpers.getAllMovies()
    .then(movies => {
        res.status(200).json({movies,token})
    })
    .catch(err => {
        res.status(500).json({err,token})

    })
}
// create getAllSeries
movieAndSerie.getAllSeries = async (req, res) => {
    let token = req.token
    const series =  await movieAndSeriesHelpers.getAllSeries()
    .then(series => {
        res.status(200).json({series,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
// create getMovieById
movieAndSerie.getMovieById = async (req, res) => {
    let token = req.token
    const movie =  await movieAndSeriesHelpers.getMovieById(req.params.id)
    .then(movie => {
        res.status(200).json({movie,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
// create getSerieById
movieAndSerie.getSerieById = async (req, res) => {
    let token = req.token
    const serie =  await movieAndSeriesHelpers.getSerieById(req.params.id)
    .then(serie => {
        res.status(200).json({serie,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
// create getMovieByName
movieAndSerie.getMovieByName = async (req, res) => {
    let token = req.token
    const movie =  await movieAndSeriesHelpers.getMovieByName(req.params.name)
    .then(movie => {
        res.status(200).json({movie,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
module.exports = movieAndSerie