import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { SupabaseProvider } from "./utils/SupabaseProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SupabaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SupabaseProvider>
  </StrictMode>
);
