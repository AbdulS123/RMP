/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

   const profs = {
    tt0120611: {
       ProfName: `Steineder Christian`,
       ProfImage: `Images/`,
       ProfSubject: `Mathe`,
       ProfComment: [`ist ganz gut`, `ist der beste`,`mag seine beschreibungen nicht`, `verlangt zu viel`],
       ProfRatingCollection: [3, 4, 4,7],
       ProfRatingResult: 0,
     },
};

// Export the movies object
module.exports = profs;
