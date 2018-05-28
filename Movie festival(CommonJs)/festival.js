

    // import constractor functions
    

    const {createMovie,createProgram, createFestival} = require("./actions/controller");   
    
      //------testing------

      const revenant = createMovie("Revenent", "drama", "200min");
      const frozen = createMovie("Frozen", "kids", '100min');

      const oscar = createProgram('06 22 2018');

      oscar.addMovie(revenant);
      oscar.addMovie(frozen);

      const summerFest = createFestival('summerFest');
      summerFest.addProgram(oscar);
      console.log(summerFest.getData());


//     const revenant = createMovie("Revenent", "drama", "200min");
//     const frozen = createMovie("Frozen", "kids", '100min');
   
//     const oscarMovies = new Program('06 22 2018');
//     oscarMovies.addMovie(revenant);
//     oscarMovies.addMovie(frozen);
//     console.log(oscarMovies.getData());


//     const cartoons = new Program("06 23 2018");
//     cartoons.addMovie(frozen);

//    ;

//     const summerFest = new Festival('summerFest');
//     summerFest.addProgram(oscarMovies);
//     summerFest.addProgram(cartoons);
//     console.log(summerFest.getData());

 
