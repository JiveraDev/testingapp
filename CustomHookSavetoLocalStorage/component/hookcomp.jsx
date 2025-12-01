import React, { useState, useEffect } from "react";
import Listing from "./listing.jsx";
import defaultList from "./list.json";

const STORAGE_KEY = "todo.list";

const Hookcomp = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultList;
    } catch (e) {
      return defaultList;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      // ignore write errors
    }
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    const newItem = { list: value };
    setItems((prev) => [...prev, newItem]);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Put your todo item here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="m-2" type="submit">
          Add to TODO list
        </button>
      </form>

      <div style={{ marginTop: 12 }}>
        <Listing items={items} />
      </div>
    </div>
  );
};

export default Hookcomp;
