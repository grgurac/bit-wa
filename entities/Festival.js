class Festival {
    constructor(name) {
        this.name = name;
        this.listOfPrograms = [];
    }

    getNumberOfMovies() {
        let counter = 0;
        this.listOfPrograms.forEach(function (program) {
            counter += program.listOfMovies();
    
        });
        return counter;
    }
    
    addProgram(){
        if (!program || !(program instanceof Program)) {
            console.log("Invalid input!");
        }
        return this.listOfPrograms.push(program);
    
    }
    getData (){
        return `${this.name} ${this.getNumberOfMovies()} ${this.listOfPrograms}`;
    }
}





module.exports = Festival;