import Image from "next/image";
export default function Search() {
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
            <input className="search-input" type="text" />
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>

      <div className="search-results-container">
        <ul>
          <li>
            <Image
              className="location-icon"
              src="/images/location.svg"
              alt="location-icon"
              width={25}
              height={25}
              priority
            />
            <div className="search-text-container ">
              <span>city</span> <span>country</span>
            </div>
          </li>
          <li>
            <Image
              className="location-icon"
              src="/images/location.svg"
              alt="location-icon"
              width={25}
              height={25}
              priority
            />
            <div className="search-text-container ">
              <span>city</span> <span>country</span>
            </div>
          </li>
          <li>
            <Image
              className="location-icon"
              src="/images/location.svg"
              alt="location-icon"
              width={25}
              height={25}
              priority
            />
            <div className="search-text-container" >
              <span>city</span> <span>country</span>
            </div>
          </li>
          <p>Show more...</p>
        </ul>
      </div>
    </>
  );
}
