import AddNewRecord from "./add-new-record";
import Search from "./search";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function List() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change this number to control items per page
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order is ascending
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Retrieve the original data from local storage
    const storedData = localStorage.getItem("searchResults");
    const originalData = storedData ? JSON.parse(storedData) : [];

    // Filter the original data based on the search query
    const filteredData = originalData.filter((item) => {
      for (let i = 0; i < item.length; i++) {
        if (
          typeof item[i] === "string" &&
          item[i].toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });

    // Set the filtered data to the state variable
    setData(filteredData);
  };

  useEffect(() => {
    // Retrieve data from local storage when the second page loads
    const storedData = localStorage.getItem("searchResults");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Sort data by name in ascending order
  const sortDataByNameAsc = () => {
    const sortedData = [...data].sort((a, b) => a[1].localeCompare(b[1]));
    setData(sortedData);
    setSortOrder("asc");
  };

  // Sort data by name in descending order
  const sortDataByNameDesc = () => {
    const sortedData = [...data].sort((a, b) => b[1].localeCompare(a[1]));
    setData(sortedData);
    setSortOrder("desc");
  };

  const renderSortButton = () => {
    return (
      <div className="sort-container">
        <div className="sort-button">
          <img src="/images/asc-desc.png" alt="" />
          Order By
        </div>
        <div className="sort-buttons">
          <div
            className={`sort-hover ${
              sortOrder === "asc" ? "active-button" : ""
            }`}
            onClick={sortDataByNameAsc}
          >
            Name ascending
          </div>
          <div
            className={`sort-hover ${
              sortOrder === "desc" ? "active-button" : ""
            }`}
            onClick={sortDataByNameDesc}
          >
            Name descending
          </div>
        </div>
      </div>
    );
  };

  // Calculate the index of the first and last items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    if (totalPages <= 1) {
      return null;
    }

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const visiblePages = pageNumbers.filter(
      (page) => Math.abs(page - currentPage) <= 2
    );

    if (totalPages <= 6) {
      return (
        <div className="pagination">
          <ul>
            <button
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              className={currentPage === 1 ? "disabled" : "pagination-button"}
            >
              Previous
            </button>

            {pageNumbers.map((number) => (
              <li
                key={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </li>
            ))}

            <button
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
              className={
                currentPage === totalPages ? "disabled" : "pagination-button"
              }
            >
              Next
            </button>
          </ul>
        </div>
      );
    }

    return (
      <div className="pagination">
        <ul>
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className={currentPage === 1 ? "disabled" : "pagination-button"}
          >
            Previous
          </button>
          {/* <li
            onClick={() => paginate(1)}
            className={
              currentPage < 3 && currentPage < 2 && currentPage < 2   ? "hide" : "show"
            }
          >
            1
          </li> */}{" "}
          <li onClick={() => paginate(1)}>1</li>
          {currentPage > 3 && (
            <>
              <span>...</span>
            </>
          )}
          {pageNumbers.slice(currentPage - 1, currentPage + 2).map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </li>
          ))}
          {currentPage < totalPages - 3 && (
            <>
              <span>...</span>
            </>
          )}
          {/* <li onClick={() => paginate(totalPages - 2)}>{totalPages - 2}</li>
          <li onClick={() => paginate(totalPages - 1)}>{totalPages - 1}</li> */}
          <li onClick={() => paginate(totalPages)}>{totalPages}</li>
          <button
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            className={
              currentPage === totalPages ? "disabled" : "pagination-button"
            }
          >
            Next
          </button>
        </ul>
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="list-container">
          <div className="list-header-container">
            <Link href="/">
              {" "}
              <Image
                className=""
                src="/images/tesodev-logo.jpg"
                alt="Next.js Logo"
                width={149}
                height={63}
                priority
              />
            </Link>

            <div className="search-inner-container">
              <div className="search-input-button-container">
                <div className="search-input-container">
                  {" "}
                  <img
                    alt="search icon"
                    fetchpriority="high"
                    width="646"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    class="search-icon"
                    src="/images/search.svg"
                  ></img>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button onClick={handleSearch} className="search-button">
                  Search
                </button>
              </div>
            </div>
            <AddNewRecord />
          </div>
          <div className="list-body-container">
            <div>
              <div className="search-list-container ">
                <ul>
                  {currentItems.map((item, index) => (
                    <li key={index}>
                      <div className="hover-div">
                        <Image
                          className="location-icon"
                          src="/images/location.svg"
                          alt="location-icon"
                          width={25}
                          height={25}
                          priority
                        />
                        <div
                          className="search-list-text-container"
                          key={item[0]}
                        >
                          <div>
                            <span> {item[6]}</span>
                            <span> {item[7]} </span>
                          </div>
                          <div>
                            <p> {item[1]}</p>
                            <p> {item[4]} </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {renderPagination()}
            </div>

            {renderSortButton()}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
