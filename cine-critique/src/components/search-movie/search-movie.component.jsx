import { useState, useEffect } from "react";
import { searchMovies } from "../../utils/requests/requests.utils";
import { Link } from "react-router-dom";

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
      <ul>
        {movies
          ? movies.map((movie, index) => {
              return (
                <li key={index}>
                  <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
