import Image from "next/image";
import Link from "next/link";
import { useState ,useEffect } from "react";

const RecordForm = () => {
  const [record, setRecord] = useState({
    name: "",
    country: "",
    city: "",
    email: "",
    website: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    country: false,
    city: false,
    email: false,
    website: false,
  });
  const [formError, setFormError] = useState(null); // State for the form-level error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord({ ...record, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation here
    if (validateForm()) {
      // Save data to localStorage
      const records = JSON.parse(localStorage.getItem("records")) || [];
      records.push(record);
      localStorage.setItem("records", JSON.stringify(records));

      // Clear form
      setRecord({
        name: "",
        country: "",
        city: "",
        email: "",
        website: "",
      });

      const url = record.website;

      try {
        const response = await fetch("/api/minify-url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });

        if (response.ok) {
          const { minifiedURL } = await response.json();
          alert(
            /* `Minified URL: ${minifiedURL}`*/
            "record has been added "
          );
        } else {
          alert("Failed to minify URL. Please try again.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again later.");
      }
      setFormError(null);
    } else {
      // Handle validation errors and mark invalid fields
      setFormError("Please fix the validation errors.");
    }
  };

  const validateForm = () => {
    const isValid =
      /^[A-Za-z]{4,60}$/.test(record.name) &&
      /^[A-Za-z]{2,40}$/.test(record.country) &&
      /^[A-Za-z]{2,40}$/.test(record.city) &&
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(record.email) &&
      /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(record.website);

    // Update validation error state for each field
    setValidationErrors({
      name: !/^[A-Za-z]{4,60}$/.test(record.name),
      country: !/^[A-Za-z]{2,40}$/.test(record.country),
      city: !/^[A-Za-z]{2,40}$/.test(record.city),
      email: !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
        record.email
      ),
      website: !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(record.website),
    });

    return isValid;
  };
  const display = () => {
    setFormError(null); // Clear the form error
  };

  useEffect(() => {
    if (formError) {
      const timer = setTimeout(display, 3000); // Adjust the time (in milliseconds) as needed
      return () => clearTimeout(timer);
    }
  }, [formError]);

  return (
    <>
      <div className="add-link-header">
        {" "}
        <Link href="/">
          <Image
            className=""
            src="/images/tesodev-logo.jpg"
            alt="Next.js Logo"
            width={149}
            height={63}
            priority
          />{" "}
        </Link>
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

      <div className="form-toast-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-container">
            <label
              htmlFor="name"
              className={validationErrors.name ? "invalid-label" : ""}
            >
              Name Surname:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={record.name}
              onChange={handleChange}
              placeholder="Enter name and surname"
              required
              className={validationErrors.name ? "invalid-input" : ""}
            />
            {validationErrors.name && (
              <span className="error-message">
                Name Surname should contain only letters and be between 4 and 60
                characters.
              </span>
            )}
          </div>

          <div className="form-container">
            <label
              htmlFor="country"
              className={validationErrors.country ? "invalid-label" : ""}
            >
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={record.country}
              onChange={handleChange}
              placeholder="Enter a country"
              required
              className={validationErrors.country ? "invalid-input" : ""}
            />
            {validationErrors.country && (
              <span className="error-message">
                Country should contain only letters and be between 2 and 40
                characters.
              </span>
            )}
          </div>

          <div className="form-container">
            <label
              htmlFor="city"
              className={validationErrors.city ? "invalid-label" : ""}
            >
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={record.city}
              onChange={handleChange}
              placeholder="Enter a city"
              className={validationErrors.city ? "invalid-input" : ""}
              required
            />
            {validationErrors.city && (
              <span className="error-message">
                City should contain only letters and be between 2 and 40
                characters.
              </span>
            )}
          </div>
          <div className="form-container">
            <label
              htmlFor="email"
              className={validationErrors.email ? "invalid-label" : ""}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={record.email}
              onChange={handleChange}
              placeholder="Enter a e-mail (abc@xyz.com)"
              required
              className={validationErrors.email ? "invalid-input" : ""}
            />
            {validationErrors.email && (
              <span className="error-message">
                Enter a e-mail (abc@xyz.com)
              </span>
            )}
          </div>

          <div className="form-container">
            <label
              htmlFor="website"
              className={validationErrors.website ? "invalid-label" : ""}
            >
              Website:
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={record.website}
              onChange={handleChange}
              placeholder="Enter a websitel (https://xyz.com)"
              required
              className={validationErrors.website ? "invalid-input" : ""}
            />
            {validationErrors.website && (
              <span className="error-message">
                Enter a website (https://xyz.com)
              </span>
            )}
          </div>

          <button className="submit-button">Add</button>
        </form>
        {formError && formError.length > 0 && (
          <div className="toast-container ">
            <div className="close" onClick={display}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="#090A0A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="toast-texts">
              <div>
                <p>Error while adding link element</p>
                <p>{formError}</p>
              </div>{" "}
              <span>Error</span>
            </div>

            <div></div>
          </div>
        )}
      </div>
    </>
  );
};

export default RecordForm;
