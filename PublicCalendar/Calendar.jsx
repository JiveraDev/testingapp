// import React from "react";
// import PropTypes from "prop-types";

import { useState, useContext } from "react";
import FetchCountry from "./fetchCountry";

function Calendar() {
  const [dropdownItem, setShowDropdownItem] = useState(false);
  const [ItemCountry, setItemCountry] = useState(null);

  return (
    <>
      <div
        className="dropdown "
        style={{ width: "200px", height: "50px" }}
        onClick={() => {
          console.log("Dropdown is CLicked");
          setShowDropdownItem(!dropdownItem);
        }}
      >
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={dropdownItem}
        >
          Dropdown button
        </button>
        <div
          className={`dropdown-menu ${dropdownItem ? "show" : ""}`}
          aria-labelledby="dropdownMenuButton"
          style={{ maxHeight: "400px", width: "200px", overflowY: "auto" }}
        >
          <FetchCountry setClickedItem={setItemCountry} />
        </div>
      </div>

      <div>
        <h1>Selected Country: {ItemCountry ? ItemCountry : "NONE"}</h1>
      </div>
    </>
  );
}

// Calendar.propTypes = {};

export default Calendar;
