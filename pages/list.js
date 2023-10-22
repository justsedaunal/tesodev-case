import AddNewRecord from "./add-new-record";
import Search from "./search";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function List() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change this number to control items per page

  useEffect(() => {
    // Retrieve data from local storage when the second page loads
    const storedData = localStorage.getItem("searchResults");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

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
          </li> */}
          {currentPage > 3 && (
            <>
              <li onClick={() => paginate(1)}>1</li>
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
          {currentPage < totalPages - 3 && 
          <>
          {/* <span>...</span>
          <li onClick={() => paginate(totalPages - 2)}>{totalPages - 2}</li>
          <li onClick={() => paginate(totalPages - 1)}>{totalPages - 1}</li>
          <li onClick={() => paginate(totalPages)}>{totalPages}</li> */}
          </>}
          {/* <li onClick={() => paginate(totalPages - 2)}>{totalPages - 2}</li>
          <li onClick={() => paginate(totalPages - 1)}>{totalPages - 1}</li>
          <li onClick={() => paginate(totalPages)}>{totalPages}</li> */}
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
      <div className="list-container">
        <div className="list-header-container">
          <Image
            className=""
            src="/images/tesodev-logo.jpg"
            alt="Next.js Logo"
            width={149}
            height={63}
            priority
          />
          <Search data={data.data} />
          <AddNewRecord />
        </div>
        <div className="list-body-container">
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
                    <div className="search-list-text-container" key={item[0]}>
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
      </div>
    </>
  );
}

export default List;
