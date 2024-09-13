const mongoose = require("mongoose");

const EncuestaSchema = mongoose.Schema({
  name: String,
  description: String,
  state: Boolean,
  category: String,
  image: String,
  questions: [
    {
      text: String,
      answers: [String],
    },
  ],
});

module.exports = mongoose.model("Encuesta", EncuestaSchema);
