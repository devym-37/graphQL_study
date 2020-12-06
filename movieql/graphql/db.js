let movies = [
  {
    id: 1,
    name: "Avengers",
    score: 50,
  },
  {
    id: 2,
    name: "The Godfather",
    scroe: 21,
  },
  {
    id: 3,
    name: "Logan",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filterMovies = movies.filter((movie) => id === movie.id);
  return filterMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
