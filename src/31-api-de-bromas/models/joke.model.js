const { Schema, model } = require('mongoose')

const JokeSchema = new Schema(
   {
      setup: {
         type: String,
         required: true,
         trim: true,
         minlength: 10,
      },
      punchline: {
         type: String,
         required: true,
         minlength: 3,
      },
   },
   {
      timestamps: true,
      versionKey: false,
   }
)

module.exports = model('JokeSchema', JokeSchema, 'Jokes')
