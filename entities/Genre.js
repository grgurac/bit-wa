
class Genre {
    constructor (name) {
    this.name = name;
}

getData() {
    const firstLetter = this.name[0].toUpperCase();
    const lastLetter = this.name[this.name.length - 1].toUpperCase();
    const idOfMovie = firstLetter + lastLetter;
    return idOfMovie;
}

}



console.log(new Genre("action"));

module.exports = Genre;