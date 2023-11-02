import { ChangeEvent } from "react";

type SearchBoxProps = {
  eventHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

function NameSearch(props: SearchBoxProps) {
  return (
    <input
      type="search"
      placeholder="search persons"
      onChange={props.eventHandler}
    />
  );
}

export default NameSearch;
