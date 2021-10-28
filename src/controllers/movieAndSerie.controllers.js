const movieAndSerie ={}
const movieAndSeriesHelpers = require('../helpers/movieAndSeries.helper')
// create getAllMoviesandSeries
movieAndSerie.getAllMoviesandSeries = async (req, res) => {
    // console.log(req.token)
    let token = req.token
        const moviesAndSeries =  await movieAndSeriesHelpers.getAllMoviesandSeries()
        .then(moviesAndSeries => {
            // moviesAndSeries.concat([req.token])
            // console.log(moviesAndSeries)
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
        res.status(200).json({"movies":movies,token})
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
    console.log(req.body.name)
    let token = req.token
    const movie =  await movieAndSeriesHelpers.getMovieByName(req.body.name)
    .then(movie => {
        res.status(200).json({movie,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
// create getSerieByName
movieAndSerie.getSerieByName = async (req, res) => {
    console.log(req.body.name)
    let token = req.token
    const serie =  await movieAndSeriesHelpers.getSerieByName(req.body.name)
    .then(serie => {
        res.status(200).json({serie,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
// create getSerieSeasonEpisode
movieAndSerie.getSerieSeasonEpisode = async (req, res) => {
    let token = req.token
    const serie =  await movieAndSeriesHelpers.getSerieSeasonEpisode(req.body.title, req.body.season, req.body.episode)
    .then(serie => {
        res.status(200).json({serie,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}

// create getalldirectors
movieAndSerie.getAllDirectors = async (req, res) => {
    let token = req.token
    const directors =  await movieAndSeriesHelpers.getAllDirectors()
    .then(directors => {
        res.status(200).json({directors,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
// create getallactors
movieAndSerie.getAllActors = async (req, res) => {
    let token = req.token
    const actors =  await movieAndSeriesHelpers.getAllActors()
    .then(actors => {
        res.status(200).json({actors,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
//create set director
movieAndSerie.setDirector = async (req, res) => {
    let token = req.token
    let jsonDirector = JSON.parse(req.body.director)
    jsonDirector.age = parseInt(jsonDirector.age)
    console.log(jsonDirector)
    const director =  await movieAndSeriesHelpers.setDirector(jsonDirector)
    .then(director => {
        res.status(200).json({director,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
//create set actor
movieAndSerie.setActor = async (req, res) => {
    let token = req.token
    let jsonActor = JSON.parse(req.body.actor)
    jsonActor.age = parseInt(jsonActor.age)
    console.log(jsonActor)
    const actor =  await movieAndSeriesHelpers.setActor(jsonActor)
    .then(actor => {
        res.status(200).json({actor,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
//create set movie
movieAndSerie.setMovie = async (req, res) => {
    let token = req.token
    console.log(req.body.movie)
    let jsonMovie = JSON.parse(req.body.movie)
    console.log(jsonMovie)
    const movie =  await movieAndSeriesHelpers.setMovie(jsonMovie)
    .then(movie => {
        res.status(200).json({movie,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}
//create set serie
movieAndSerie.setSerie = async (req, res) => {
    let token = req.token
    let jsonSerie = JSON.parse(req.body.serie)
    console.log(jsonSerie)
    const serie =  await movieAndSeriesHelpers.setSerie(jsonSerie)
    .then(serie => {
        res.status(200).json({serie,token})
    })
    .catch(err => {
        res.status(500).json({err,token})
    })
}


module.exports = movieAndSerie