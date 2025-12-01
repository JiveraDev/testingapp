import React from "react";
import Hookcomp from "./component/hookcomp";
import Listing from "./component/listing";
import { Link } from "react-router-dom";

const CustomHookPage = () => {
  return (
    <div className="align-item-center">
      <h1>this for the page of Custom Hook</h1>
      <h1>Add To Do</h1>
      <Hookcomp />
      <Link to="/calendar">
        <button className="btn btn-primary active">Calendar</button>
      </Link>
      <Link to="/Chatbot/chatbot">
        <button className="btn btn-primary active">Chatbot page</button>
      </Link>
    </div>
  );
};

export default CustomHookPage;
