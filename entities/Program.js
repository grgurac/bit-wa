class Program {
    constructor (date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}

totalNumberOfMovies() {
    return this.listOfMovies.length;
}

addMovie() {
    if (!movie || !(movie instanceof Movie)) {
        console.log("Invalid input!");
    }
    return this.listOfMovies.push(movie);
}

getData() {
    const day = this.date.getDate();
    const month = this.date.getMonth();
    const year = this.date.getFullYear();
    const date = day + "." + month + "." + year;
    const result = "\t" + date + ", " + this.totalNumberOfMovies() + "\n";

    for (let i = 0; i < this.listOfMovies.length; i++) {
        if (i === this.listOfMovies.length - 1) {
            result += `${this.listOfMovies[i].title} ${this.listOfMovies[i].length} ${this.listOfMovies[i].genre}`;
        }
    }
}
}

module.exports = Program;