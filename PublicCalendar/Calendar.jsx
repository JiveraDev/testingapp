import { StrictMode, useState } from "react";
import { Link } from "react-router-dom";
import FetchCountry from "./fetchCountry";
import ShowHolidaydate from "./showHolidaydate";
import AcordionComponent from "../Accordion/acordioncomponent.jsx";
import Chatboxpoosition from "../Chatbot/chatboxpoosition.jsx";
import Firsttcomponent from "../Chatbot/Component/Firsttcomponent.jsx";

function Calendar() {
  const [dropdownItem, setShowDropdownItem] = useState(false);
  const [ItemCountry, setItemCountry] = useState(null);
  const [itemcca2, setitemcaa2] = useState(null);
  const [showChat, setShowChat] = useState(false);
  console.log(ItemCountry, itemcca2);
  return (
    <>
      {/* Chatbot navigation button below */}
      <Link to="/Chatbot/Chatbot">
        <button className="btn btn-primary m-1">Open chatbot </button>
      </Link>
      <Link to="/CustomHookpage">
        <button className="btn btn-primary m-1">Open ToDo </button>
      </Link>
      <Link to="/MindGame">
        <button className="btn btn-primary m-1">Open Picture MindGame </button>
      </Link>
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
        {/* <h1>Selected Country: {ItemCountry || "NONE"}</h1> */}
        <input
          type="text"
          id="county"
          placeholder={ItemCountry}
          readOnly={true}
        />
        <div style={{ marginTop: "8px" }}></div>
      </div>
      <label htmlFor="county">Selected Country</label>
      <div>
        <ShowHolidaydate selectmoCCA2={itemcca2} />
      </div>
      {/* Floating chat button + inline chat form */}
      <Chatboxpoosition
        isOpen={showChat}
        onToggle={() => setShowChat((s) => !s)}
      />
      {showChat && (
        <div style={{ position: "fixed", right: 24, bottom: 88, zIndex: 2000 }}>
          <Firsttcomponent onClose={() => setShowChat(false)} />
        </div>
      )}
      <AcordionComponent />
    </>
  );
}

export default Calendar;
