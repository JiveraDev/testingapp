import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Chatboxpoosition = ({ isOpen = false, onToggle }) => {
  return (
    <div className="fixed-bottom p-3" style={{ right: 24, left: "auto" }}>
      <button
        type="button"
        onClick={() => onToggle && onToggle()}
        className="btn btn-primary btn-lg rounded-circle shadow-lg"
        style={{ width: "60px", height: "60px" }}
        aria-pressed={isOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-chat-dots"}`}></i>
      </button>
    </div>
  );
};

export default Chatboxpoosition;
