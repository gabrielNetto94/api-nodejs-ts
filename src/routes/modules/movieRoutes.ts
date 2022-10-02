import {Router} from 'express'

//controllers
import {createMovie, findMovieById, getAllMovies, removeMovie, updateMovie} from '../../controllers/movieController'

//validations
import {validate} from '../../middleware/handleValidation'
import {movieCreateValidation} from '../../middleware/movieValidation'
import verifyJWT from '../../middleware/auth'

const moviesRoutes = Router()

moviesRoutes.post('/movie', verifyJWT, movieCreateValidation(), validate, createMovie)
    .get('/movie/:id', verifyJWT, findMovieById)
    .get('/movie', verifyJWT, getAllMovies)
    .delete('/movie/:id', verifyJWT, removeMovie)
    .patch('/movie/:id', verifyJWT, movieCreateValidation(), validate, updateMovie)

export default moviesRoutes