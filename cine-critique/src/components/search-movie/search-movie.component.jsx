import { useState, useEffect } from "react";
import { searchMovies } from "../../utils/requests/requests.utils";
import { MovieList, MovieItem, MovieLink } from "./search-movie.styles";

export function SearchMovie({ searchTerm }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const asynHandler = async () => {
      const moviesRes = await searchMovies(searchTerm);
      if (moviesRes.Response) {
        setMovies(moviesRes.Search);
      } else {
        setMovies([]);
      }
    };
    asynHandler();
  }, [searchTerm]);

  return (
    <div>
      <MovieList>
        {movies
          ? movies.map((movie, index) => {
              return (
                <MovieItem key={index}>
                  <MovieLink to={`/movie/${movie.imdbID}`}>
                    {movie.Title}
                  </MovieLink>
                </MovieItem>
              );
            })
          : null}
      </MovieList>
    </div>
  );
}
