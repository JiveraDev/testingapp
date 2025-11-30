import React, { useState } from "react";
import { Link } from "react-router-dom";
import Firsttcomponent from "./Component/Firsttcomponent";
import Chatboxpoosition from "./chatboxpoosition.jsx";

const Chatbot = () => {
  const [visibility, setvisiblity] = useState(true);
  const [showChat, setShowChat] = useState(false);
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Chatbot Page</h2>
      <p>This is a placeholder chatbot page. Implement your chatbot UI here.</p>
      <Link to="/calendar">
        <button className="btn btn-primary">
          Open Calendar & Testing Page{" "}
        </button>
      </Link>
      <Chatboxpoosition
        isOpen={showChat}
        onToggle={() => setShowChat((s) => !s)}
      />
      {showChat && (
        <div style={{ position: "fixed", right: 24, bottom: 88, zIndex: 2000 }}>
          <Firsttcomponent onClose={() => setShowChat(false)} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
