# server-node
 Challenge NodeJS, Movies and Serie API
 
# [Go API](https://challennode.herokuapp.com/)
 ## Installations
 - clone repository 
 - execute `npm i`
 - execute API `npm run start`
## Endpoint
### Users
 - '/singin'  set body 'name','mail','password' 
 - '/singup' set body  'name','password' 
 ####  update the token on all endpoints
 ### endpoints 
 #### find
 - '/findAll'  find all series and movies
 - '/findAllMovies' find all movies
 - '/findAllSeries' find all series
 - '/findMovieId/:id' find movie by id
 - '/findSerieId/:id'  find serie by id
 - '/findMovieName' find movie by name
 -  '/findSerieName' find serie by name
 - '/findSerieSeasonEpisode' find serie by Season and episode
 - '/getAllDirectors' find all directors
 - '/getAllActors' find all actors'
 #### Add
 
 - '/setDirector' set body director:
	 - `name: String,lastName: String,age: Number`
 - '/setActor' set body actor:
	 -  `name: String,lastName: String,age: Number`
	 - '/setSerie' set serie:
		 -  `{   Title:String , Year:String ,    Runtime:String ,    Genre:String ,  Director:{ObjectId, ref:'Director'} ,  Actors:[{ObjectId, ref:'Actor'}] , Plot:String ,    Awards:String , Poster:String ,  type:String,  totalSeasons:String , Season:String ,  episode:String	} `
-   '/setMovie' Setting movie:
	- `{   Title:String , Year:String ,    Runtime:String ,    Genre:String ,  Director:{ObjectId, ref:'Director' ,  Actors:[{ObjectId, ref:'Actor'] , Plot:String ,    Awards:String , Poster:String ,  type:String   }`

# default user: Admin@admin.com
# default password: admin

# thanks for seeing it
# by Gabriel Vauccassovitch
