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

  return (
    <>
      <div className="list-container">
        <div className="list-header-container">
          {/* <Search  data={data}/> */}

          {/* <h2>Data from Local Storage:</h2> */}

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

        <div className="search-list-container container  ">
          {" "}
          <ul>
            {currentItems.map((item, index) => (
              //console.log(item[7])
              <li key={index}>
                {" "}
                <div className="hover-div" >
                  {" "}
                  <Image
                    className="location-icon"
                    src="/images/location.svg"
                    alt="location-icon"
                    width={25}
                    height={25}
                    priority
                  />
                  <div className="search-list-text-container " key={item[0]}>
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
        {/* Pagination */}
        <div className="pagination">
          {data.length > itemsPerPage && (
            <ul>
              <button
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
                className={currentPage === 1 ? "disabled" : "pagination-button"}
              >
                Previous
              </button>
              {Array(Math.ceil(data.length / itemsPerPage))
                .fill()
                .map((_, i) => (
                  <li
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={currentPage === i + 1 ? "active" : ""}
                  >
                    {i + 1}
                  </li>
                ))}
              <button
                onClick={() =>
                  currentPage < Math.ceil(data.length / itemsPerPage) &&
                  setCurrentPage(currentPage + 1)
                }
                className={
                  currentPage >= Math.ceil(data.length / itemsPerPage)
                    ? "disabled"
                    : "pagination-button"
                }
              >
                Next
              </button>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default List;
