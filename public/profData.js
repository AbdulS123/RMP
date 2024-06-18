/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

   const profs = {
    tt0120611: {
       ProfName: `Steineder Christian`,
       ProfImage: `./images/prof1.jpg`,
       ProfSubject: `Mathe`,
       ProfComment: [`ist ganz gut`, `ist der beste`,`mag seine beschreibungen nicht`, `verlangt zu viel`],
       ProfRatingCollection: [3, 4, 4, 1],
       ProfRatingResult: 0,
     },
     tt0124311: {
      ProfName: `Dipl.-Ing. (FH) Johannes Wirgler`,
      ProfImage: `./images/prof2.jpg`,
      ProfSubject: `Teamentwicklung, Projektmanagment, Prof. Präsentationen`,
      ProfComment: [`mega chillig der Dude`, `ist über gut`,`sein  Untericht ist der Informativ`, `ganz ok, hätte es besser machen können`],
      ProfRatingCollection: [1, 1, 1],
      ProfRatingResult: 0,
    },
    tt012e2341: {
      ProfName: `Dipl.-Ing. (FH) Johannes Wirgler`,
      ProfImage: `./images/prof2.jpg`,
      ProfSubject: `Teamentwicklung, Projektmanagment, Prof. Präsentationen`,
      ProfComment: [`mega chillig der Dude`, `ist über gut`,`sein  Untericht ist der Informativ`, `ganz ok, hätte es besser machen können`],
      ProfRatingCollection: [3, 4, 4, 5],
      ProfRatingResult: 0,
    },
    tt01643424311: {
      ProfName: `Dipl.-Ing. (FH) Johannes Wirgler`,
      ProfImage: `./images/prof2.jpg`,
      ProfSubject: `Teamentwicklung, Projektmanagment, Prof. Präsentationen`,
      ProfComment: [`mega chillig der Dude`, `ist über gut`,`sein  Untericht ist der Informativ`, `ganz ok, hätte es besser machen können`],
      ProfRatingCollection: [3, 1, 1, 1],
      ProfRatingResult: 0,
    },
};

// Export the movies object
module.exports = profs;
