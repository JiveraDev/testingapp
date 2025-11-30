import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calendar from "../PublicCalendar/Calendar.jsx";
import Chatbot from "../Chatbot/Chatbot.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/Chatbot/Chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
