const Joke = require('../models/joke.model')
const { validateObjectId } = require('../utils/validateObjectId')

exports.getAllJokes = async (req, res) => {
   try {
      const jokes = await Joke.find({})
      res.status(200).json(jokes)
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

exports.getJokeById = async (req, res) => {
   try {
      const isValidId = validateObjectId(req.params.id)

      if (!isValidId)
         return res.status(400).json({ message: 'El ID no es válido' })

      const joke = await Joke.findById(req.params.id)
      res.status(200).json(joke)
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

exports.getRandomJoke = async (req, res) => {
   try {
      const randomJoke = await Joke.aggregate([{ $sample: { size: 1 } }])
      res.status(200).json(randomJoke)
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

exports.createNewJoke = async (req, res) => {
   try {
      const newJoke = new Joke(req.body)
      const jokeSaved = await newJoke.save()
      res.status(200).json(jokeSaved)
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

exports.updateJoke = async (req, res) => {
   try {
      const isValidId = validateObjectId(req.params.id)

      if (!isValidId)
         return res.status(400).json({ message: 'El ID no es válido' })

      const jokeUpdated = await Joke.findByIdAndUpdate(
         req.params.id,
         {
            $set: {
               ...req.body,
            },
         },
         { new: true }
      )
      res.status(200).json(jokeUpdated)
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}

exports.deleteJoke = async (req, res) => {
   try {
      const isValidId = validateObjectId(req.params.id)

      if (!isValidId)
         return res.status(400).json({ message: 'El ID no es válido' })

      const jokeDeleted = await Joke.findByIdAndDelete(req.params.id)
      res.status(200).json(jokeDeleted)
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
}
