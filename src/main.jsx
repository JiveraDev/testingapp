import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Calendar from "../PublicCalendar/Calendar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Calendar />
  </StrictMode>
);
