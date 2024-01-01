import { useState } from "react";
import { SearchMovie } from "../search-movie/search-movie.component";
import { HomeContainer, SearchInput, Title } from "./home.styles";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = async (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <HomeContainer>
      <Title>Search Movies & TV Shows</Title>
      <SearchInput type="search" value={searchTerm} onChange={changeHandler} />
      <SearchMovie searchTerm={searchTerm} />
    </HomeContainer>
  );
}
