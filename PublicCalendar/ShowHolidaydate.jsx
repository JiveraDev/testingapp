import React, { useEffect, useState } from "react";
// import FetchCountry from "./fetchCountry";

const ShowHolidaydate = ({ selectmoCCA2 }) => {
  const [holidaydata, setData] = useState([]);

  useEffect(() => {
    console.log("selectmoCCA2 prop received:", selectmoCCA2);
    if (!selectmoCCA2) {
      console.log("No country selected");
      return;
    }

    const url = `https://holidayapi.com/v1/holidays?pretty&key=d3498b12-7455-4657-86bd-83a48648f7c5&country=${selectmoCCA2}&year=2024`;

    // log("Fetching from URL:", url);

    fetch(url)
      .then((res) => {
        console.log("HTTP status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("API result:", result);
        const holidays = Array.isArray(result) ? result : result.holidays || [];
        // console.log("Processed holidays (array):", holidays);
        setData(holidays);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [selectmoCCA2]);

  return (
    <>
      <div
        className="card"
        style={{
          width: "300px",
          maxHeight: "200px",
          overflow: "auto",
          alignItems: "self-start",
        }}
      >
        <h5>this are the holidays</h5>
        <div class="card-body">
          {holidaydata.map((holiday) => {
            const dateboeen = holiday.observed;

            const [year = "", month = "", day = ""] = dateboeen.split("-");
            const monthNumber = parseInt(month); // "01" -> 1
            const monthNames = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];

            const monthName = monthNames[monthNumber - 1]; // subtract 1 because array is 0-indexed

            return (
              <li key={holiday.name}>
                {monthName} {day} : {holiday.name}
              </li>
            );
          })}
          {/*<button onClick={() => console.log(holidaydata)}>click to console</button> */}
        </div>
      </div>
    </>
  );
};

export default ShowHolidaydate;
