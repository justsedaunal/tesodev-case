// components/RecordForm.js
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RecordForm = () => {
  return (
    <>
      <div className="add-link-header">
        {" "}
        <Image
          className=""
          src="/images/tesodev-logo.jpg"
          alt="Next.js Logo"
          width={149}
          height={63}
          priority
        />{" "}
        <div>
          <Link href="/list" className="return-list ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
            >
              <path
                d="M0.939453 10.9392C0.353604 11.5249 0.353503 12.4747 0.939228 13.0605L10.4842 22.6075C11.0699 23.1933 12.0196 23.1934 12.6055 22.6077C13.1913 22.022 13.1914 21.0722 12.6057 20.4864L4.12132 12.0002L12.6075 3.51583C13.1934 2.93011 13.1935 1.98036 12.6077 1.39451C12.022 0.808661 11.0723 0.80856 10.4864 1.39428L0.939453 10.9392ZM28.0002 10.5027L2.00016 10.5L1.99984 13.5L27.9998 13.5027L28.0002 10.5027Z"
                fill="#484848"
              />
            </svg>
            <p>Return to List Page </p>{" "}
          </Link>
        </div>
      </div>
      <div className="form-toast-container" >
      <form onSubmit="{handleSubmit}" className="form">
        <div>
          <label htmlFor="name">Name Surname:</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={record.name}
            // onChange={handleChange}
            placeholder="Enter name and surname"
            required
          />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            // value={record.country}
            // onChange={handleChange}
            placeholder="Enter name and surname"
            required
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            // value={record.city}
            // onChange={handleChange}
            placeholder="Enter a country"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={record.email}
            // onChange={handleChange}
            placeholder="Enter a websitel (https://xyz.com)"
            required
          />
        </div>

        <div>
          <label htmlFor="website">Website:</label>
          <input
            type="url"
            id="website"
            name="website"
            // value={record.website}
            // onChange={handleChange}
            placeholder="Enter name and surname"
            required
          />
        </div>

        <button type="submit" className="submit-button" >Add</button>
      </form>
      <div>error tost</div>
      </div>

    </>
  );
};

export default RecordForm;
