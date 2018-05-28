class Genre {
    constructor(name) {
        this.name = name;
    }

    getData() {
        const firstLetter = this.name[0].toUpperCase();
        const lastLetter = this.name[this.name.length - 1].toUpperCase();
        const genreCode = `${firstLetter}${lastLetter}`;
        return genreCode;

    };

    }


module.exports = Genre;