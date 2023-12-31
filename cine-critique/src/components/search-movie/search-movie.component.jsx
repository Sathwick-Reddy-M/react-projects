import { useState, useEffect } from "react";
import { searchMovies } from "../../utils/requests/requests.utils";

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
              return <li key={index}>{movie.Title}</li>;
            })
          : null}
      </ul>
    </div>
  );
}
