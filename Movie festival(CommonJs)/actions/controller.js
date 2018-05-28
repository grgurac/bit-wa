const Genre = require("../utilities/Genre");
const Movie = require("../utilities/Movie");
const Program = require("../utilities/Program");
const Festival = require("../utilities/Festival");


const createMovie = (nameStr, genreStr, length) => {
    const genre = new Genre(genreStr)
    return new Movie(nameStr, genre, length);
};

const createProgram = date => new Program(date);

const createFestival = name => new Festival(name);

module.exports = { createMovie, createProgram, createFestival };