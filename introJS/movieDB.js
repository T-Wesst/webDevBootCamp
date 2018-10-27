// create an array of movie objects. Each movie should have a title, rating, and hasWatched properties. Iterate through the array and print out something that looks likes:
/*
you have watched "In Bruges" - 5 stars
you have not seen "Frozen" - 4.5 stars
you have seen "Mad Max Fury Road" - 5 stars
you have not seen "Les Miserables" - 3.5 stars
*/

var movies = [
  {
    title: "Logan",
    rating: "4 stars",
    hasWatched: false
  },
  {
    title: "Frozen",
    rating: "4.5 stars",
    hasWatched: true
  },
  {
    title: "Lion King",
    rating: "4 stars",
    hasWatched: true
  },
  {
    title: "Twilight",
    rating: "5 stars",
    hasWatched: false
  }
];
function printMovies(movies) {
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].hasWatched) {
      console.log(
        "You have watched " + movies[i].title + " " + movies[i].rating
      );
    } else {
      console.log(
        "You have not seen " + movies[i].title + " " + movies[i].rating
      );
    }
  }
}
