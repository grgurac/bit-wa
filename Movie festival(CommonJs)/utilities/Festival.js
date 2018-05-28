class Festival {
    constructor(name){
        this.name = name;
        this.listOfPrograms = [];
        this.numOfAllMovies = 0;

    }
    addProgram (program) {
        this.numOfAllMovies++;
        return this.listOfPrograms.push(program);
    }

    festivalData() {
        let festivalData = '';
        this.listOfPrograms.forEach(function (program) {
            festivalData += program.getData();
        });
        return festivalData;
    }

    getData() {
        return `${this.name} has ${this.numOfAllMovies} programs: \n ${this.festivalData()}`;
    }
}

module.exports = Festival;