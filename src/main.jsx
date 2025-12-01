import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./App.jsx";
import Calendar from "../PublicCalendar/Calendar.jsx";
import Chatbot from "../Chatbot/Chatbot.jsx";
import MindGame from "../MindGame/MindGame.jsx";
import CustomHookPage from "../CustomHookSavetoLocalStorage/CustomHookPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/Chatbot/Chatbot" element={<Chatbot />} />
        <Route path="/CustomHookpage" element={<CustomHookPage />} />
        <Route path="/MindGame" element={<MindGame />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
