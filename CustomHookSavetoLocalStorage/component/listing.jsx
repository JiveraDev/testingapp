import React from "react";
import todoList from "./list.json";

const Listing = ({ items }) => {
  const list = Array.isArray(items) && items.length ? items : todoList;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">Added:</div>
      <div className="card-body">
        <ul className="list-unstyled mb-0">
          {list.map((item, idx) => (
            <li key={item.id ?? idx}>{item.list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Listing;
