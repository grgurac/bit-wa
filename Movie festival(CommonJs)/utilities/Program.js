class Program {
    constructor (date){
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numOfMovies = this.listOfMovies.length;
    }

    addMovie (movie) {
        this.numOfMovies++;
        return this.listOfMovies.push(movie);
    }

    lengthAllMovies () {
        let lengthAllMovies = 0;
        this.listOfMovies.forEach(function (movie) {
            lengthAllMovies += parseFloat(movie.length);
        });
        return lengthAllMovies;
    }

    moviesData () {
        let movieData = "";
        this.listOfMovies.forEach(function (movie) {
            movieData += `\t${movie.getData()}\n`;

        });
        return movieData;
    }

    getData () {
        return `${this.date} program duration: ${this.lengthAllMovies()} \n ${this.moviesData()}`;
    }
}

module.exports = Program;