import React, { useEffect, useState } from "react";
// import FetchCountry from "./fetchCountry";

const ShowHolidaydate = ({ selectmoCCA2 }) => {
  const [holidaydata, setData] = useState([]);

  useEffect(() => {
    console.log("selectmoCCA2 prop received:", selectmoCCA2);
    if (!selectmoCCA2) {
      console.warn("No country selected");
      return;
    }

    const url = `https://holidayapi.com/v1/holidays?pretty&key=d3498b12-7455-4657-86bd-83a48648f7c5&country=${selectmoCCA2}&year=2024`;

    // console.log("Fetching from URL:", url);

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
      <h5>this is the holidays</h5>
      {holidaydata.map((holiday) => {
        const dateboeen = holiday.date;

        const [year = "", month = "", day = ""] = dateboeen.split("-");
        const monthNumber = parseInt(month, 10); // "01" -> 1
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
            {monthName}-{day} : {holiday.name}
          </li>
        );
      })}

      {/* {holidaydata.map((holiday) => {
        const dateStr =
          holiday.date || holiday.observed || holiday.startDate || "";
        const [year = "", month = "", day = ""] = dateStr.split("-");

        return (
          <li key={(holiday.name || "") + dateStr}>
            <div>{holiday.name}</div>
            <div>Original date: {dateStr}</div>
            <div>
              Year: {year} • Month: {month} • Day: {day}
            </div>
          </li>
        );
      })} */}
      {/* <button onClick={() => console.log(holidaydata)}>click to console</button> */}
    </>
  );
};

export default ShowHolidaydate;
