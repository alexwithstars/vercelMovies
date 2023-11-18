// imports ----------
const express = require("express")
const {createMovieRouter} = require("./routes/movies.js")
const {viewRouter} = require("./routes/view.js")
const {cors} = require("./middlewares/cors.js")


function createApp({movieModel}){
	// init ----------
	const app=express()
	app.disable("x-powered-by")
	app.use(express.json())

	// cors ----------
	app.use(cors)

	// movies ----------
	app.use("/movies",createMovieRouter({movieModel}))

	// view ----------
	app.use("/view",viewRouter)

	// Errors ----------
	app.use((req,res)=>{
		res.status(404).json({error: "Resource not found"})
	})
	app.use((err,req,res,next)=>{
		res.json({error:err})
	})

	// listen ----------
	const PORT = process.env.PORT ?? 3000
	const server = app.listen(PORT,()=>{
		const addres = server.address()
		console.log(`listening on http://${(addres.address=="::" ? "localhost":addres.address)}:${PORT}`)
	})
}

const {MovieModel} = require("./models/mysql/movie.js")
createApp({movieModel:MovieModel})

module.exports={createApp}