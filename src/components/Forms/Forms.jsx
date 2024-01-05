import { useEffect, useState } from "react";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import { Wrapper } from "./Forms.styled";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Forms = ({onSearch}) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    onSearch(search);
  }, [search, region, onSearch]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <Filter
        options={options}
        placeholder="Filter by Region"
        isClearable
              isSearchable={false}
              value={region}
              onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Forms;
