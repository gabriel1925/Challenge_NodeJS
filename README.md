# server-node
 Challenge NodeJS, Movies and Serie API
 ## Installations
 - clone repository 
 - ejecute `npm i`
 - ejecute  la API `npm run start`
## Endpoint
### Users
 - '/singin'  setting body 'name','mail','password' 
 - '/singup' settingbody  'name','password' 
 ####  update the token on all endpoints
 ### endpoints 
 #### find
 - '/findAll'  find all Series and Movies
 - '/findAllMovies' find all Movies
 - '/findAllSeries' find all Series
 - '/findMovieId/:id' find movie by id
 - '/findSerieId/:id'  find serie by id
 - '/findMovieName' find movie by name
 -  '/findSerieName' find serie by name
 - '/findSerieSeasonEpisode' find serie by Season and episode
 - '/getAllDirectors' find all directors
 - '/getAllActors' find all actors'
 #### Add
 
 - '/setDirector' setting body director:
	 - `name: String,lastName: String,age: Number`
 - '/setActor' Setting body actor:
	 -  `name: String,lastName: String,age: Number`
	 - '/setSerie' Setting serie:
		 -  `{   Title:String , Year:String ,    Runtime:String ,    Genre:String ,  Director:{ObjectId, ref:'Director'} ,  Actors:[{ObjectId, ref:'Actor'}] , Plot:String ,    Awards:String , Poster:String ,  type:String,  totalSeasons:String , Season:String ,  episode:String	} `
-   '/setMovie' Setting movie:
	- `{   Title:String , Year:String ,    Runtime:String ,    Genre:String ,  Director:{ObjectId, ref:'Director' ,  Actors:[{ObjectId, ref:'Actor'] , Plot:String ,    Awards:String , Poster:String ,  type:String   }`

# thanks for seeing it
# by Gabriel Vauccassovitch
