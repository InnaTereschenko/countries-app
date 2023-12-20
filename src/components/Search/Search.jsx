import { IoSearch } from "react-icons/io5";
import { InputContainer, Input } from "./Search.styled";

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />

      <Input
        onChange={(evt) => setSearch(evt.target.value)}
        value={search}
        type="search"
        placeholder="Search for a country..."
      />
    </InputContainer>
  );
};

export default Search;
