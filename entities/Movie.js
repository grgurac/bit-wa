class Movie {
    constructor(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

getData() {
    return `${this.title}, ${this.length}, ${this.genre.getData()}`;
}

}

console.log(new Movie("american history x", "life", 132));


module.exports = Movie;