const Genre = require("../entities/Genre");
const Movie = require("../entities/Movie");
const Program = require("../entities/Program");

function createMovie(title, genreString, length) {
  var genre = new Genre(genreString);
  return new Movie(title, genre, length);
}

function createProgram(date) {
  return new Program(date);
}

module.exports = {
  createMovie,
  createProgram
}


