import React, { useState, useRef, useEffect } from "react";
import "./firsttcomponent.css";

const Firsttcomponent = ({ onClose, onSend }) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello. How are you today?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: "",
    },
  ]);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    sendMessage(message.trim());
  };

  const sendMessage = (text) => {
    if (!text) return;
    if (onSend) onSend(text);
    console.log("Send message:", text);

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((prev) => [...prev, { role: "user", text, time, avatar: "" }]);
    setMessage("");

    // simple simulated bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `Received: ${text}`,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          avatar: "",
        },
      ]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    // Send on Enter, allow newline with Shift+Enter
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const txt = message.trim();
      if (txt) sendMessage(txt);
    }
  };

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <>
      <div className="chat-card" id="myForm">
        <form
          onSubmit={handleSubmit}
          className="form-container"
          aria-label="Chat form"
          id="ChatForm"
        >
          <h1>Chat</h1>

          <div className="chat-list" aria-live="polite" ref={listRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`message ${m.role === "user" ? "user" : "bot"}`}
              >
                <div className="message-row">
                  <img
                    className="avatar"
                    src={m.avatar || ""}
                    alt={m.role === "user" ? "You" : "Bot"}
                  />
                  <div className="bubble">
                    <div className="bubble-text">{m.text}</div>
                    <div className="bubble-meta">{m.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <label htmlFor="msg">
            <b>Message</b>
          </label>

          <textarea
            id="msg"
            className="chat-textarea"
            placeholder="Type message..."
            name="msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />

          <div className="form-actions">
            <button type="submit" className="btn send">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Firsttcomponent;
