import { useState } from "react";

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    const filteredResults = data.filter(
      (item) =>
        //console.log(item[7])
        item[7].toLowerCase().includes(query) ||
        item[6].toLowerCase().includes(query)
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by City Or Country"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((result) => (
          <div key={result[0]}>
            <li>
              <strong>city</strong> {result[7]}
            </li>
            <li>
              <strong>country</strong> {result[6]}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Search;
