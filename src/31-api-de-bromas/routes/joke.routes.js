const { Router } = require('express')
const {
   createNewJoke,
   updateJoke,
   deleteJoke,
   getAllJokes,
   getRandomJoke,
   getJokeById,
} = require('../controllers/joke.controller')

const router = Router()

router.get('/', getAllJokes)
router.get('/random', getRandomJoke)
router.get('/:id', getJokeById)

router.post('/new', createNewJoke)
router.put('/update/:id', updateJoke)
router.delete('/delete/:id', deleteJoke)

module.exports = router
