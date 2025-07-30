import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TicketProvider } from "./context/TicketContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TicketProvider>
      <App />
    </TicketProvider>
  </StrictMode>
);
