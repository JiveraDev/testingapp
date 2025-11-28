import { useState } from "react";
import FetchCountry from "./fetchCountry";
import ShowHolidaydate from "./showHolidaydate";

function Calendar() {
  const [dropdownItem, setShowDropdownItem] = useState(false);
  const [ItemCountry, setItemCountry] = useState(null);
  const [itemcca2, setitemcaa2] = useState(null);
  console.log(ItemCountry, itemcca2);
  return (
    <>
      <div
        className="dropdown"
        style={{ width: "200px", height: "50px" }}
        onClick={() => setShowDropdownItem(!dropdownItem)}
      >
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          aria-haspopup="true"
          aria-expanded={dropdownItem}
        >
          {"Select Country"}
        </button>

        <div
          className={`dropdown-menu ${dropdownItem ? "show" : ""}`}
          style={{ maxHeight: "400px", width: "200px", overflowY: "auto" }}
        >
          <FetchCountry
            setClickedItem={setItemCountry}
            setitemcaa2o={setitemcaa2}
          />
        </div>
      </div>

      <div>
        <h1>Selected Country: {ItemCountry || "NONE"}</h1>
      </div>
      <div>
        <ShowHolidaydate selectmoCCA2={itemcca2} />
      </div>
    </>
  );
}

export default Calendar;
