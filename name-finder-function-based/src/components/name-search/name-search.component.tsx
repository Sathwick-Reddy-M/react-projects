import { ChangeEvent } from "react";
import './name-search.styles.css';

type SearchBoxProps = {
  eventHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

function NameSearch(props: SearchBoxProps) {
  return (
    <input
        type="search"
        placeholder="Search persons"
        onChange={props.eventHandler}
        className="name-search"
      />
  );
}

export default NameSearch;
