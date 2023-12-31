import { useState } from "react";
import { SearchMovie } from "../search-movie/search-movie.component";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = async (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h3>Search Movies & TV Shows</h3>
      <input type="search" value={searchTerm} onChange={changeHandler} />
      <SearchMovie searchTerm={searchTerm} />
    </div>
  );
}
