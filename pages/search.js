import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Search({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  useEffect(() => {
    // Load search results from local storage on component mount
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setSearchResults(JSON.parse(storedResults));
    }
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    if (query.length >= 2) {
      const filteredResults = data.filter(
        (item) =>
          item[7].toLowerCase().includes(query) ||
          item[6].toLowerCase().includes(query)
      );

      // Store filtered results in local storage
      localStorage.setItem("searchResults", JSON.stringify(filteredResults));

      setSearchResults(filteredResults.slice(0, 3)); // Get the first three results
    } else {
      // Clear the results if the search term is less than two characters
      setSearchResults([]);
    }
  };
  return (
    <>
      <div className="search-inner-container">
        <div className="search-title-container">
          <p className="search-title">Find in records</p>
        </div>
        <div className="search-input-button-container">
          <div className="search-input-container">
            <Image
              className="search-icon"
              src="/images/search.svg"
              alt="search icon"
              width={646}
              height={48}
              priority
            />
            <input
              className="search-input"
              type="text"
              placeholder="Search by City Or Country"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>

      <div className="search-results-container">
        {searchTerm && searchResults.length > 0 && (
          <ul>
            {searchResults.map((result) => (
              <li>
                <Image
                  className="location-icon"
                  src="/images/location.svg"
                  alt="location-icon"
                  width={25}
                  height={25}
                  priority
                />
                <div className="search-text-container " key={result[0]}>
                  <span> {result[7]}</span> <span> {result[6]} </span>
                </div>
              </li>
            ))}
            <Link href="list" >      <p>Show more...</p></Link>
      
          </ul>
        )}
      </div>
    </>
  );
}
