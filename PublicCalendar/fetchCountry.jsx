import React, { useEffect, useState } from "react";

const FetchCountry = ({ setClickedItem, setitemcaa2o }) => {
  // receive setter a prop

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,flag,cca2") // added cca3 for key
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // run only once

  return (
    <>
      {data.map((country) => (
        <a
          className="dropdown-item"
          href="#"
          key={country.name.common}
          onClick={() => {
            setClickedItem(country.name.common);
            setitemcaa2o(country.cca2);
          }}
          // call the prop
        >
          {country.name.common}
        </a>
      ))}
    </>
  );
};

export default FetchCountry;
