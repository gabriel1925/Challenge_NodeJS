const movieAndSeriesHelper = {}
const movie = require('../models/movie.models')
const serie = require('../models/serie.models')
const directorModels = require('../models/director.models')
const actorsModel = require('../models/actor.models')
const { search } = require('../routes/MovieAndSerie.routes')
// helper find all movies and series
movieAndSeriesHelper.getAllMoviesandSeries = async () => {
    try {
        const movies = await movie.find().populate('Director').populate('Actors').catch(err => {
            console.log(err)
        })
        const series = await serie.find().populate('Director').populate('Actors').catch(err => {
            return [{error: 'Error finding series'}]
        })
        let joined = [...movies, ...series]
        return joined
    } catch (error) {
        throw error
    }
}
// helper find all movies
movieAndSeriesHelper.getAllMovies = async () => {
    try {
        const movies = await movie.find().populate('Director').populate('Actors')
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
// helper find all series
movieAndSeriesHelper.getAllSeries = async () => {
    try {
        const series = await serie.find().populate('Director').populate('Actors')
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
// helper find movie by id
movieAndSeriesHelper.getMovie = async (id) => {
    try {
        const movie = await movie.findById({'_id': id}).populate('Director').populate('Actors')
        .then(async movie => {
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
// helper find serie by id
movieAndSeriesHelper.getSerieById = async (id) => {
    try {
        const serie = await serie.findById({'_id': id}).populate('Director').populate('Actors')
        .then(async serie => {
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
// helper find movie by name
movieAndSeriesHelper.getMovieByName = async (name) => {
    console.log(name)
    try {
        const movieFindName = await movie.find({"name": name}).populate('Director').populate('Actors')
        // console.log(movieFindName)
        .then(async movie => {
            if(movie.length > 0) {
                return movie
            } else {
                return {error:"there is no movie"}
            }
        })
        .catch(err => {
            return {error: 'Error finding movie'}
        })
        return movieFindName
    } catch (error) {
        console.log("error")
        throw error
    }
}
// helper find serie by name
movieAndSeriesHelper.getSerieByName = async (name) => {
    try {
        const serieFindName = await serie.find({"name": name}).populate('Director').populate('Actors')
        .then(async serie => {
            if(serie.length > 0) {
                return serie
            } else {
                return {error:"there is no serie"}
            }
        })
        .catch(err => {
            return {error: 'Error finding serie'}
        })
        return serieFindName
    } catch (error) {
        throw error
    }
}
// helper find serie by season and episode
movieAndSeriesHelper.getSerieSeasonEpisode = async (title,season, episode) => {
    try {
        const serieFindName = await serie.find({"Tiele": title,"Season":season,"episode":episode}).populate('Director').populate('Actors')
        .then(async serie => {
            if(serie.length > 0) {
                return serie
            } else {
                return {error:"there is no serie"}
            }
        })
        .catch(err => {
            return {error: 'Error finding serie'}
        })
        return serieFindName
    } catch (error) {
        throw error
    }
}

// helper find all directors
movieAndSeriesHelper.getAllDirectors = async () => {
    try {
        const directors = await directorModels.find()
        .then(directors => {
            if(directors.length > 0) {
                return directors
            } else {
                return {error: 'No directors found'}
            }
        })
        .catch(err => {
            return {error: 'Error finding directors'}
        })
        return directors
    } catch (error) {
        throw error
    }
}
// helper find all actors
movieAndSeriesHelper.getAllActors = async () => {
    try {
        const actors = await actorsModel.find()
        .then(actors => {
            if(actors.length > 0) {
                return actors
            } else {
                return {error: 'No actors found'}
            }
        })
        .catch(err => {
            return {error: 'Error finding actors'}
        })
        return actors
    } catch (error) {
        throw error
    }
}

// helper find director by id
movieAndSeriesHelper.getDirector = async (id) => {
    try {
        let director = await directorModels.findById({'_id': id})
        .then(director => {
            if(director) {
                return director
            } else {
                return {error: 'No director found'}
            }
        })
        .catch(err => {
            return {error: 'Error finding director'}
        })
        return director
    } catch (error) {
        throw error
    }
}
// helper add director
movieAndSeriesHelper.setDirector = async (director) => {
    try {
        console.log(director)
        // const directorParse = {'name': director.name, 'lastName': director.lastName,"age": director.age}
        const newdirector = new directorModels({'name': director.name, 'lastName': director.lastName,"age": director.age})
        console.log(newdirector)
        const directorSaved = await newdirector.save()
        .then(directorSaved => {
            if(directorSaved) {
                return directorSaved
            } else {
                return {error: 'Error saving director'}
            }
        })
        .catch(err => {
            return {error: 'Error saving director'}
        })
        return directorSaved
    } catch (error) {
        throw error
    }
}
// helper add actor
movieAndSeriesHelper.setActor = async (actor) => {
    try {
        const newactor = new actorsModel({'name': actor.name, 'lastName': actor.lastName,"age": actor.age})
                const actorSaved =await newactor.save()
        .then(actorSaved => {
            if(actorSaved) {
                return actorSaved
            } else {
                return {error: 'Error saving actor'}
            }
        })
        .catch(err => {
            return {error: 'Error saving actor'}
        })
        return actorSaved
    }
    catch (error) {
        throw error
    }
}
// helper add movie
movieAndSeriesHelper.setMovie = async (movieNew) => {
    try {
        // console.log(movie)
        movieNew.Actors = movieNew.Actors.substring(1,movieNew.Actors.length-1).split(',')
        const newmovie = new movie({
            "Title":movieNew.Title,
            "Year":movieNew.Year,
            "Runtime":movieNew.Runtime,
            "Genre":movieNew.Genre,
            "Director":movieNew.Director,
            "Actors":movieNew.Actors,
            "Plot":movieNew.Plot,
            "Awards":movieNew.Awards,
            "Poster":movieNew.Poster,
            "type":movieNew.type
        })
        console.log(newmovie)
        const movieSaved = await newmovie.save()
        .then(movieSaved => {
            if(movieSaved) {
                return movieSaved
            } else {
                return {error: 'Error saving movie'}
            }
        })
        .catch(err => {
            return {error: 'Error saving movie'}
        })
        return movieSaved
    } catch (error) {
        console.log(error)
        throw error
    }
}
// helper add serie
movieAndSeriesHelper.setSerie = async (serieNew) => {
    try {
        // console.log(movie)
        // Actors.substring(1,Actors.length-1).split(',')
        serieNew.Actors = serieNew.Actors.substring(1,serieNew.Actors.length-1).split(',')
        const newserie = new serie({
            "Title":serieNew.Title,
            "Year":serieNew.Year,
            "Runtime":serieNew.Runtime,
            "Genre":serieNew.Genre,
            "Director":serieNew.Director,
            "Actors":serieNew.Actors,
            "Plot":serieNew.Plot,
            "Awards":serieNew.Awards,
            "Poster":serieNew.Poster,
            "type":serieNew.type,
            "totalSeasons":serieNew.totalSeasons,
            "Season":serieNew.Season,
            "episode":serieNew.episode
        })
        console.log(newserie)
        const serieSaved = await newserie.save()
        .then(serieSaved => {
            if(serieSaved) {
                return serieSaved
            } else {
                return {error: 'Error saving serie'}
            }
        })
        .catch(err => {
            return {error: 'Error saving serie'}
        })
        return serieSaved
    } catch (error) {
        throw error
    }
}









module.exports = movieAndSeriesHelper