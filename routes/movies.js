const {Router} = require("express")
const {MovieController} = require("../controllers/movies.js")


function createMovieRouter({movieModel}){
	const moviesRouter = Router()
	const movieController = new MovieController({movieModel})

	// get ----------
	moviesRouter.get("/",movieController.getAll)
	moviesRouter.get("/genres",movieController.getGenres)
	moviesRouter.get("/:id",movieController.getById)

	// post ----------
	moviesRouter.post("/",movieController.create)

	// delete ----------
	moviesRouter.delete("/:id",movieController.delete)

	// patch ----------
	moviesRouter.patch("/:id",movieController.update)

	return moviesRouter
}

module.exports={createMovieRouter}