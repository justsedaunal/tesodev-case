import { useState } from "react";

const itemsPerPage = 3;

const Carousel = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(items.length / itemsPerPage) - 1 ? 0 : prevPage + 1
    );
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(items.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);


  return (
    <>
      <div className="carousel-container">
        <h1 className="carousel-title">Top News</h1>
        <div className="carousel">
          <button onClick={prevSlide} className="carousel-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
            >
              <rect
                x="0.162048"
                y="0.5"
                width="48"
                height="48"
                rx="24"
                fill="#EEEEEE"
              />
              <path
                d="M30.162 36.5L18.162 24.5L30.162 12.5"
                stroke="#8A8A8A"
                stroke-width="2.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="carousel-items" >
            {displayedItems.map((item, index) => (
              <div key={index} className="carousel-item">
                <img src={item.image} alt={item.alt} />
                <p className="carousel-text">{item.text}</p>
                <p className="carousel-author"> {item.author} </p>
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="carousel-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
            >
              <rect
                width="48"
                height="48"
                rx="24"
                transform="matrix(-1 0 0 1 48.5146 0.5)"
                fill="#EEEEEE"
              />
              <path
                d="M18.5146 36.5L30.5146 24.5L18.5146 12.5"
                stroke="#8A8A8A"
                stroke-width="2.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
