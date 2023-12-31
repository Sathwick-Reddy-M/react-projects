const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export async function searchMovies(searchTerm, page = 1) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${searchTerm}&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&i=${movieId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
