import React, { useEffect, useState } from "react";

const FetchCountry = () => {
  const [data, setData] = useState([]);

  useEffect((setClickedItem) => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,flag")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // <-- VERY IMPORTANT

  return (
    <>
      {data.map((country) => (
        <a
          className="dropdown-item"
          key={country.cca3}
          onClick={() => {
            setClickedItem(country.name.common);
            console.log(clickedItem);
          }}
        >
          {country.name.common}
        </a>
      ))}
    </>
  );
};

export default FetchCountry;
